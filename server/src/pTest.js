const spawn = require("child_process").spawn;

const test =  () => {
    const pythonProcess = spawn('python',["./testPy/Version3/test.py"]);
    pythonProcess.stdout.on('data', (data) => {
        console.log(data.toString())
    });
}

test()



