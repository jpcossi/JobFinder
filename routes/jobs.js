const express = require('express')
const router = express.Router()
const Job = require('../models/Job.js')

router.get('/add', (req, res) => {
  res.render('add')
})

router.get('/view/:id', (req, res) => Job.findOne({
  where: {id: req.params.id}
}).then(job => {
    res.render('view', {
      job
    })
  }).catch(err => console.log(err))
)

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