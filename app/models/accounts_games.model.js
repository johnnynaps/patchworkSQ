module.exports = (sequelize, Sequelize) => {
    const AccountsGames = sequelize.define("accounts_games", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        account_id: {
            type: Sequelize.INTEGER
        },
        game_id: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });

    return AccountsGames;
};