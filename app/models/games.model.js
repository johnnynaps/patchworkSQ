module.exports = (sequelize, Sequelize) => {
  const Games = sequelize.define("games_info", {
    urlHome: {
      type: Sequelize.STRING
    },
    urlSupport: {
      type: Sequelize.STRING
    },
    urlNews: {
      type: Sequelize.STRING
    },
    urlServer: {
      type: Sequelize.STRING
    },
    urlTwitter: {
      type: Sequelize.STRING
    },
    serverStatus: {
      type: Sequelize.STRING
    },
    currentPatch: {
      type: Sequelize.STRING
    },
    game_id: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });

  return Games;
};