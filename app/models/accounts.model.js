module.exports = (sequelize, Sequelize) => {
  const Accounts = sequelize.define("accounts", {
    email: {
      type: Sequelize.STRING
    },
    fname: {
      type: Sequelize.STRING
    },
    lname: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });

  return Accounts;
};