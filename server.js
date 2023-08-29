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

app.get('/magic/:questions', (request, response)=>{

    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    response.send(("<h1> "+ request.params.questions +" "+ answers[Math.floor(Math.random()*answers.length)]+" </h1>"))
})

app.listen(3000, ()=>{
    console.log("Greets has been initiated")
})

