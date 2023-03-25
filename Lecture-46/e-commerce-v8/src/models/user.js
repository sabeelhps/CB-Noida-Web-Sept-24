import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  role: {
    type: String,
    enum: ['seller', 'buyer'],
  }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

export default User;
