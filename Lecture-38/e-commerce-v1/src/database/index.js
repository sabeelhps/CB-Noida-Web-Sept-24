import mongoose from "mongoose";

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://localhost:27017/e-commerce-db');
        console.log('DB connection open!');
    }
    catch (err) {
        console.error(err);
        disconnectDB();
        console.log('DB Connection Closed');
    }
}

const disconnectDB = async () => {
    await mongoose.disconnect();
}

export default  {
    connectDB,
    disconnectDB
}
