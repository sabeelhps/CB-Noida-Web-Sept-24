import userService from '../service/userService';

const getRegisterForm = async (req, res) => {
  res.render('auth/signup');
};

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  const newUser = await userService.registerUser({ username, password, email });
  res.send(newUser);
};

const loginUser = (req, res) => {
  res.render('auth/login');
};

export default {
  registerUser,
  getRegisterForm,
  loginUser,
};
