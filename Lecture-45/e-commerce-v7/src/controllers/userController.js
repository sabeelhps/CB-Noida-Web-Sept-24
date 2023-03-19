import userService from '../service/userService';
import { InteralServerError } from '../core/ApiError';

const getRegisterForm = async (req, res) => {
  res.render('auth/signup');
};

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  const newUser = await userService.registerUser({ username, password, email });
  res.send(newUser);
};

const getLoginForm = (req, res) => {
  res.render('auth/login');
};


const loginUser = (req, res) => {
  req.flash('success', `Loggedin successfull as ${req.user.username}`);
  res.redirect('/api/v1/products');
}

const logoutUser = async(req, res) => {
  req.logout((err) => {
    if (err) {
      throw new InteralServerError('Cannot logout at the moment');
    }
    req.flash('success', 'Logged out successfully!');
    res.redirect('/api/v1/auth/login');
  });
}

export default {
  registerUser,
  getRegisterForm,
  getLoginForm,
  loginUser,
  logoutUser
};
