import express from 'express';
import v1Routes from './routes/v1';

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json({ limit: '10mb' }));

app.use('/api/v1', v1Routes);

// Custom Error Middleware to catch Errors
app.use((err, req, res, next) => {
    const { message = 'Something Went Wrong', statusCode = 500 } = err;
    res.status(statusCode).send(message);
});

export default app;
