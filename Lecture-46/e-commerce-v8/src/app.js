import express from 'express';
import path from 'path';
import ejsMate from 'ejs-mate';
import methodOverride from 'method-override';
import session from 'express-session';
import flash from 'connect-flash';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import MongoStore from 'connect-mongo';
import { database, secret, node_env } from './config';

import v1Routes from './routes/v1';
import User from './models/user';

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(methodOverride('_method'));

const dbUrl = database[node_env].dbUrl; 

const store = MongoStore.create({
  secret: secret,
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60, // time period in seconds
});

const sessionConfig = {
  store: store,
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 1,
  },
};

app.use(session(sessionConfig));
app.use(flash());

// This tells passport to use LocalStrategy
//  and User.authenticate method to verify the user during login
passport.use(new LocalStrategy(User.authenticate()));

// This tells passport to user passport local
// mongoose methods(User.serializeUser, User.deserializeUser) to add / remove the user from session
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// We are adding passport middleware into our express app
app.use(passport.initialize());

// Passport will use express-session for persistent login
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});

app.get('/', (req, res) => {
  res.render('home');
});

app.use('/api/v1', v1Routes);

// Custom Error Middleware to catch Errors
// eslint-disable-next-line
app.use((err, req, res, next) => {
  const { message = 'Something Went Wrong', statusCode = 500 } = err;
  res.locals.error = message;
  res.status(statusCode).render('error', { message });
});

export default app;
