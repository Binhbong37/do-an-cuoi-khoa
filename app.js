const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const xsmnRoutes = require('./routes/kqxs-routes');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

const errorController = require('./controller/error');

const URL_MONGODB = 'mongodb://localhost:27017/do-an';

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use((req, res, next) => {
//     User.findById('6250decd35ed03f13fbb03b9')
//         .then((user) => {
//             req.user = user;
//             next();
//         })
//         .catch((err) => console.log(err));
// });

app.get('/', (req, res) => {
    res.render('home', {
        path: '',
        pageTitle: 'Trang chủ',
    });
});

app.use(require('./routes/ticket'));
app.use('/admin', adminRoutes);
app.use('/ket-qua-xo-so', xsmnRoutes);
app.use(authRoutes);
app.use(errorController.get404);

const port = process.env.PORT || 8080;

// Kết nối với csdl
mongoose
    .connect(URL_MONGODB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => {
        app.listen(port, () => console.log(`App is running on port ${port}`));
        console.log('CONNECT DB SUCCESSFULLY !!!!');
    })
    .catch((err) => {
        console.log(err);
    });
