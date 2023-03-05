const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    mobile: {
        type: String,
        maxLength: 10
    },
    addresses: [
        {
            _id:false,
            city: String,
            state: String,
            country: String
        }
    ]
});

const User = mongoose.model('User', userSchema);

mongoose.connect('mongodb://localhost:27017/relationship-db')
    .then(() => console.log('connected'));

async function registerUser() {
    const vivek = new User({ name: 'Vivek', mobile: '999999999' });
    await vivek.save();
    console.log(vivek);
}

async function addNewAddress(id) {
    const user = await User.findById(id);
    user.addresses.push({ city: 'Chennai', state: 'Tamil Nadu', country: 'India' });
    await user.save();
    console.log('Added the new address!');
}

// registerUser();
addNewAddress('640428d6f7a8430ab89dc0ae');
