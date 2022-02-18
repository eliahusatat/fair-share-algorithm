// const spawn = require('child_process').spawn;
const PythonShell = require('python-shell').PythonShell;

const test = async (req, res) => {
    try {
        const matrix = req.body.matrix
        // const procces = spawn('python' ,['../testPy/Version3/test.py']);
        // await  procces.stdout.on('data', data => {
        //     console.log('in procces.stdout')
        //     console.log(data.toString())
        // });
        // matrix.forEach(array => array.forEach(el => console.log(el)));
        // runPy = test1();
        // runPy.then(function(fromRunpy) {
        //     console.log(fromRunpy.toString());
        //     res.end(fromRunpy);
        // }).catch(function(fromRunpy) {
        //     console.log(fromRunpy.toString());
        //     res.end(fromRunpy);
        // });

        const numOfAgents = matrix.length
        const numOfitems = matrix[0].length
        let options = {
            args: [matrix,numOfAgents,numOfitems]
        };
        PythonShell.run('./src/algorithm/Version3/TestScript.py', options, function (err, results) {
            if (err) console.log(err);
            res.send({ success: true, data: results })
        });
        // logger.info({ message: { step: 'end', name: 'youtube', time: new Date() } })
    } catch (e) {
        console.log('in test catch')
        // logger.error({route: 'sendCampaign', error: e.message});
        res.send({ success: false, error: e.message })
    }
}

const test1 = () => {
    console.log('in test1')
    // const procces = spawn('python' ,['./testPy/Version3/test.py']);
    // procces.stdout.on('data', data => {
    //     console.log(data.toString())
    // });

    // return new Promise(function(success, nosuccess) {
    //
    //     const { spawn } = require('child_process');
    //     const pyprog = spawn('python', ['./testPy/Version3/test.py']);
    //
    //     pyprog.stdout.on('data', function(data) {
    //         success(data);
    //     });
    //
    //     pyprog.stderr.on('data', (data) => {
    //         nosuccess(data);
    //     });
    // });
}

const test2 = () => {
    // console.log('in test2')
        PythonShell.run('./src/algorithm/Version3/TestScript.py', null, function (err, results) {
            if (err) throw err;
            console.log(results);
        });
}

// test2()


module.exports = {
    test,
}
