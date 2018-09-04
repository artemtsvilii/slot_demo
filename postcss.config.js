module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                'Chrome >= 49',
            ],
            remove: false,
        })
    ]
};
