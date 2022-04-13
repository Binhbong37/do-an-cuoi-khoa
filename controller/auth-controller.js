exports.getSingup = (req, res) => {
    res.render('auth/signup');
};

exports.postSingup = (req, res) => {
    const { name, email, password, address, gender } = req.body;
    console.log(name, email, password, address, gender);
};

exports.getLogin = (req, res) => {
    res.render('auth/login');
};
