const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.status(200)
  // res.sendFile(path.join(__dirname, 'views', 'index'))
  res.render('all', {
    title: 'Main page',
    isAll: true
  })
})

module.exports = router
