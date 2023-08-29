const express = require("express")

const app = express()

app.get('/greeting', (request, response) =>{
    response.send("<h1>What's up</h1>")
})

app.get('/greeting/:name', (request, response) =>{
    response.send("<h1>What's up</h1>" + request.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    res.send("<h1>Your tip is:</h1>" + (req.params.total)*(req.params.tipPercentage/100))
})

app.listen(3000, ()=>{
    console.log("Greets has been initiated")
})

