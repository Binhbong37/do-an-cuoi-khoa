exports.getSingup = (req, res) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Đăng ký',
    });
};

exports.postSingup = (req, res) => {
    const { name, email, password, address, gender } = req.body;
    console.log(name, email, password, address, gender);
    res.redirect('/admin/user');
};

exports.getLogin = (req, res) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Đăng nhập',
    });
};
