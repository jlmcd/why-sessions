module.exports = {
  customMiddleware: (req, res, next) => {
    console.log('middleware hit')
    next()
  },
  authorization: (req, res, next) => {
    if (req.body.username === 'Michael Scarn') {
      next()
    } else {
      res.status(401).send('Not authorized!')
    }
  }
}