import userRepo from '../repository/userRepo';

const registerUser = async (user) => {
  const { username, password, email } = user;
  return userRepo.createUser({ username, password, email });
};

export default {
  registerUser,
};
