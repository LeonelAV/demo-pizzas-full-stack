function contactMail(req,res) {

  const { name, email, subject, message } = req.body
  console.log( { name, email, subject, message });
}

module.exports = contactMail