let clicks = 0

module.exports = {
  getClicks: (req, res) => {
    res.status(200).send(String(clicks))
  },
  addClick: (req, res) => {
    res.status(200).send(String(++clicks))
  }
}