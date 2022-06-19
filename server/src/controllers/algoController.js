const PythonShell = require('python-shell').PythonShell;

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
            } else{
                if(results[0].length > 5 && results[0].substring(0, 5) === 'ERROR') {
                    res.send({ success: false, error: 'python exception ' + results[0]})
                } else {
                    res.send({ success: true, data: results, participantsArray: req.body.participantsArray, type: req.body.type})
                }
            }
        });
        // logger.info({ message: { step: 'end', name: 'youtube', time: new Date() } })
    } catch (e) {
        console.log('in test catch')
        // logger.error({route: 'sendCampaign', error: e.message});
        res.send({ success: false, error: 'python exception ' + e.message })
    }
}

module.exports = {
    algoExecution,
}
