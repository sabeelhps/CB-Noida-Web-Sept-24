import app from './app';
import db from './database'; 

(async() => {
    try {
        await db.connectDB();
        app.listen(3000, () => {
            console.log('server running at port 3000');
        });
    }
    catch (err) {
        console.err(err);
    }
})();