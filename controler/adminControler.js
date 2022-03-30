
module.exports = {
    indexView: async function (req, res,) {
        res.render('logIn');
    },
    loginUser: async function (req, res) {
        var user = await userSchema.findOne({ phone: req.body.phone },)
        console.log(user);
        if (!user) {
            console.log("invalid user");
            return send(res, HttpStatus.UNAUTHORIZED, ErrorCode.INVALID_CODE, Message.USER_INVALID);
        }

    },
    home: async function (req, res,) {
        res.render('home');
    },
    signupView: async function (req, res,) {
        res.render('signUp');
    },
}