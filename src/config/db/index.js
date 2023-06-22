const mongoose = require('mongoose');
async function connect() {
    try {
        // mongoose.set('useCreateIndex', true);

        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,mongodb://localhost:27017/nodejs_dev mongodb://127.0.0.1:27017/nodejs_dev
        });

        // await mongoose.connect('mongo://localhost:27017/nodejs_dev');
        // mongoose.connect('mongodb://127.0.0.1:27017/nodejs_dev').then(() => console.log('Connected!'));
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failed');
    }
}

module.exports = { connect };
