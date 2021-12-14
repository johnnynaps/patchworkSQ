module.exports = (sequelize, Sequelize) => {
    const AccountsGames = sequelize.define("accounts_games", {
        accountID: {
            type: Sequelize.INTEGER
        },
        gameID: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return AccountsGames;
};