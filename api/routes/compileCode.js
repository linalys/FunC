const router = require('express').Router();
fs = require('fs');


router.route('/c%2B%2B').post((req, res, next) => {
    fs.writeFile('./executables/'+ req.body.name + '.cpp', req.body.code, function (err) {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            const exec = require('child_process').exec;
            const path = require('path');
            const location = path.resolve(process.cwd());
            exec('cpp.bat ' + req.body.name, {cwd: location + '/executables'}, (err, stdout, stderr) => {
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
        }
    });
});


router.route('/java').post((req, res, next) => {
    const code = req.body.code.replace('Main', req.body.name);
    fs.writeFile('./executables/test'+ req.body.name + '.java', code, function (err) {
        if (err){
            console.log(err);
            res.send(err);
        }else{
            const exec = require('child_process').exec;
            const path = require('path');
            const location = path.resolve(process.cwd());
            exec('java.bat ' + req.body.name, {cwd: location + '/executables'}, (err, stdout, stderr) => {
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
        }
    });
});





module.exports = router;