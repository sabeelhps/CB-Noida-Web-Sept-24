import userRepo from '../repository/userRepo';

const registerUser = async (user) => {
  const {
    username, password, email, role,
  } = user;
  return userRepo.createUser({
    username, password, email, role,
  });
};

export default {
  registerUser,
};
