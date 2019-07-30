module.exports = {
  customMiddleware: (req, res, next) => {
    console.log('middleware hit')
    next()
  },
  authenticate: (req, res, next) => {
    if (req.session.username === 'Michael Scarn') {
      next()
    } else {
      res.status(401).send('Not authorized!')
    }
  }
}