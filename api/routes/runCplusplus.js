const router = require('express').Router();
fs = require('fs');

router.route('/Cplusplus').post((req, res, next) => {
    console.log(req.body.code);
    fs.writeFile('helloworld.txt', req.body.code, function (err) {
        if (err) return console.log(err);
        console.log('Hello World > helloworld.txt');
    });
});


module.exports = router;