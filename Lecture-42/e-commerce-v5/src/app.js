import express from 'express';
import path from 'path';
import ejsMate from 'ejs-mate';
import methodOverride from 'method-override';
import session from 'express-session';
import flash from 'connect-flash';

import v1Routes from './routes/v1';

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));
app.use(methodOverride('_method'));

const sessionConfig = {
  secret: 'weneedabettersecret',
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

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
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
