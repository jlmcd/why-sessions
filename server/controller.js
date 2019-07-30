module.exports = {
  getClicks: (req, res) => {
    if (!req.session.clicks) req.session.clicks = 0;
    console.log(req.session)
    res.status(200).send(String(req.session.clicks))
  },
  addClick: (req, res) => {
    if (!req.session.clicks) req.session.clicks = 0;
    res.status(200).send(String(++req.session.clicks))
  }
}