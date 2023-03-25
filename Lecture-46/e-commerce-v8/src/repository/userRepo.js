import User from '../models/user';

const createUser = (user) => {
  const {
    username, password, email, role,
  } = user;
  return User.register({
    username, email, role,
  }, password);
};

export default {
  createUser,
};
