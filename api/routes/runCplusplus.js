const router = require('express').Router();
fs = require('fs');

router.route('/get/Cplusplus').get((req, res, next) => {
    const exec = require('child_process').exec;
    const path = require('path');
    const location = path.resolve(process.cwd() + '/./my.bat');
    exec('\"' + location + '\"', (err, stdout, stderr) => {
        if (err) {
            res.write("2");
            res.write(err.toString());
            res.end();
        }
        else if(stderr){
            const text = stderr.toString();
            const lines = text.split('\n');
            // remove one line, starting at the first position
            lines.splice(0,1);
            // join the array back into a single string
            const newText = lines.join('\n');
            res.write("1");
            res.write(newText);
            res.end();
        }
        else if(stdout){
            const text = stdout.toString();
            const lines = text.split('\n');
            // remove one line, starting at the first position
            lines.splice(0,4);
            // join the array back into a single string
            const newText = lines.join('\n');
            res.write("0");
            res.write(newText);
            res.end();
        }
    });
});


router.route('/Cplusplus').post((req, res, next) => {
    fs.writeFile('helloworld.cpp', req.body.code, function (err) {
        if (err){
            res.send(err);
        }else{
            res.send('cpp created!');
        }
    });
});


module.exports = router;