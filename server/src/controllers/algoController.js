const PythonShell = require('python-shell').PythonShell;
const {getLogger} = require('../utils/logger');
const logger = getLogger();

const algoExecution = async (req, res) => {
    try {
        const matrix = req.body.matrix
        const numOfAgents = matrix.length
        const numOfItems = matrix[0].length
        let algoType = 'envy-free'
        if(req.body.type)
         algoType = req.body.type
        let options = {
            args: [matrix,numOfAgents,numOfItems,algoType]
        };
        PythonShell.run('./src/algorithm/Version3/AlgoScript.py', options, function (err, results) {
            if (err) {
                console.log(err)
                logger.error({name: 'PythonShell.run error', message: 'PythonShell.run error ' + err});
            } else{
                if(results[0].length > 5 && results[0].substring(0, 5) === 'ERROR') {
                    logger.error({name: 'python exception error', message: 'python exception error '  + results[0]});
                    res.send({ success: false, error: 'python exception ' + results[0]})
                } else {
                    logger.error({name: 'algoExecution success', message: 'algoExecution success '  + JSON.stringify({ success: true, data: results, participantsArray: req.body.participantsArray, type: req.body.type})});
                    res.send({ success: true, data: results, participantsArray: req.body.participantsArray, type: req.body.type})
                }
            }
        });
    } catch (e) {
        console.log('in test catch')
        logger.error({name: 'js exception error', message: 'js exception error ' + e.message});
        res.send({ success: false, error: 'js exception error ' + e.message })
    }
}

module.exports = {
    algoExecution,
}
