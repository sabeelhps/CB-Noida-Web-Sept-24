import User from '../models/user';

const createUser = (user) => {
  const { username, password, email } = user;
  return User.register({
    username, email,
  }, password);
};

export default {
  createUser,
};
