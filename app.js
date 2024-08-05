const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db/connection.js')

const app = express()
const PORT = 3000

app.listen (PORT, function(){
  console.log(`O Express esta rodando na porta ${PORT}`)
})

/// body parser
app.use(bodyParser.urlencoded({ extended: false}))

//db connection
db
  .authenticate()
  .then(() => {
    console.log("conectou com o banco com sucesso")
  }).catch(err => {
    console.log("ocorreu um erro ao conectar", err)
  })

//routes
app.get('/', (req, res) =>{
  res.send("Esta funcionando 2")
})

//routes jobs
app.use('/jobs', require('./routes/jobs'))

