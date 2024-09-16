const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Подтверждение регистрации на сайте",
    html: `<a target="_blank" href="http://localhost:3000/api/auth/verify/${verificationToken}">Нажмите для подтверждения</a>`,
  };

  return mail;
};

module.exports = createVerifyEmail;
