exports.getQuaySo = (req, res) => {
    res.render('admin/quaySo', {
        path: '/admin/quay-so',
        pageTitle: 'Quay số',
    });
};

exports.getAllUser = (req, res) => {
    res.render('admin/user', {
        path: '/admin/user',
        pageTitle: 'List User',
        user: [
            { id: 1, name: 'Hoan Van Binh' },
            { id: 2, name: 'Hoan Van Binh' },
            { id: 3, name: 'Hoan Van Binh 2' },
        ],
    });
};

exports.getEditUser = (req, res) => {
    res.render('admin/edit-user', {
        path: '',
        pageTitle: 'Chỉnh sửa',
    });
};
