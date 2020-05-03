const router = require('express').Router();
fs = require('fs');

router.route('/get/Cplusplus').get((req, res, next) => {
    const exec = require('child_process').exec;
    exec('my.bat', (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            res.send(err);
        }
        else if(stderr){
            const text = stderr.toString();
            const lines = text.split('\n');
            // remove one line, starting at the first position
            lines.splice(0,1);
            // join the array back into a single string
            const newText = lines.join('\n');
            res.send(newText);
        }
        else if(stdout){
            const text = stdout.toString();
            const lines = text.split('\n');
            // remove one line, starting at the first position
            lines.splice(0,4);
            // join the array back into a single string
            const newText = lines.join('\n');
            res.send(newText);
        }
    });
});


router.route('/Cplusplus').post((req, res, next) => {
    console.log(req.body.code);
    fs.writeFile('helloworld.cpp', req.body.code, function (err) {
        if (err) return console.log(err);
        res.send('cpp created!');
    });
});


module.exports = router;