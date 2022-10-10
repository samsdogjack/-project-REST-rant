const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
router.get('/', (req, res) => {
    res.render('GET /places')
})

module.exports = router

