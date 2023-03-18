import express from 'express';
import passport from 'passport';
import userController from '../../controllers/userController';
import catchAsync from '../../core/catchAsync';
import { InteralServerError } from '../../core/ApiError';

const router = express.Router();

router.get('/register', userController.getRegisterForm);

router.post('/register', catchAsync(userController.registerUser));

router.get('/login', userController.loginUser);

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
}), (req, res) => {
  req.flash('success', `Loggedin successfull as ${req.user.username}`);
  res.redirect('/api/v1/products');
});

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      throw new InteralServerError('Cannot logout at the moment');
    }
    req.flash('success', 'Logged out successfully!');
    res.redirect('/api/v1/auth/login');
  });
});

export default router;
