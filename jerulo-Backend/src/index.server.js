const express = require('express');
const env = require('dotenv');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const authRoute = require('./Routes/Auths')
const adminRoute = require('./Routes/admin/Auths');

const app = express();


env.config();
app.use(express.json());
app.use('/api', authRoute);
app.use('/api', adminRoute);
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rl5ce.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }

).then(() => {
    console.log('Database connected successfully');
});
//mongodb + srv: //uzoma:<password>@cluster0.rl5ce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority   



app.listen(process.env.PORT, () => {
    console.log(`port is Listening on port ${process.env.PORT }`)
})