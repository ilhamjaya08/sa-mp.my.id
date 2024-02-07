var query = require('samp-query')

var options = {
    host: '94.23.166.205'
}

query(options, function (error, response) {
    if(error)
        console.log(error)
    else 
        console.log(response)
})