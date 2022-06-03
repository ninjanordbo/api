const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    }, 
    'bob':{
        'age': 85,
        'birthName': 'Bobby Brown',
        'birthLocation': 'London, England'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}


app.get('/', (request, respond) => {
    Response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
       respond.json(rappers[rapperName])
    }else{
        respond.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is now running on ${PORT}! Betta Go Catch It!`)
})