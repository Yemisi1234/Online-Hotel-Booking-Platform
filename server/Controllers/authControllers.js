function sendStatus(req, res) {
  res.status(200).send(`${req.params.message}`);
}

async function register(req, res) {
  let { Name, Email, Password } = req.body;

  //   res.status(200).send(`${req.params.message}`);
}

module.exports = { sendStatus, register };
