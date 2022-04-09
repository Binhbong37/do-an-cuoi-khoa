const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const User = require('./model/user');

const xsmnRoutes = require('./routes/xsmn-routes');
const adminRoutes = require('./routes/admin');
const app = express();

const URL_MONGODB = 'mongodb://localhost:27017/do-an';

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.send('<h1>Sever</h1>');
});
app.use('/xsmn', xsmnRoutes);
app.use('/admin', adminRoutes);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ extended: false }));

const port = process.env.PORT || 8080;

// Kết nối với csdl
mongoose
    .connect(URL_MONGODB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })

    .then(() => {
        User.findOne().then((user) => {
            if (!user) {
                const newUser = new User({
                    name: 'Binh',
                    email: 'abc@gmail.com',
                    password: '1234567',
                    address: 'TP.HCM',
                    role: 'Admin',
                    gender: 1,
                    avatar: 'somtexurlhere',
                });
                newUser.save();
            }
        });
    })
    .then(() => {
        app.listen(port, () => console.log(`App is running on port ${port}`));
        console.log('CONNECT DB SUCCESSFULLY !!!!');
    })
    .catch((err) => {
        console.log(err);
    });
