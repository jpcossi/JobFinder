const express = require('express')
const router = express.Router()
const Job = require('../models/job')

router.get('/teste', (req, res) => {
  res.send("get deu certo")
})

router.post('/add', (req, res) =>{
  const {title, description, email, salary, company, new_job} = req.body
  
  // insert
  Job.create({
    title,
    description,
    email,
    salary,
    company,
    new_job
  }).then(() => res.redirect('/'))
  .catch(err => console.log(err))  
})

module.exports = router