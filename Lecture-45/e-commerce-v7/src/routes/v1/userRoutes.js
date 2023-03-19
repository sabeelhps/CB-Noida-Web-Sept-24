import express from 'express';
import passport from 'passport';
import userController from '../../controllers/userController';
import catchAsync from '../../core/catchAsync';

const router = express.Router();

router.get('/register', userController.getRegisterForm);

router.post('/register', catchAsync(userController.registerUser));

router.get('/login', userController.getLoginForm);

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
}), userController.loginUser);

router.get('/logout',catchAsync(userController.logoutUser));

export default router;
