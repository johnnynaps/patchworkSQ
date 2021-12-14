module.exports = (sequelize, Sequelize) => {
    const Games = sequelize.define("master_games", {
        game_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        game_title: {
            type: Sequelize.STRING
        },
        game_dev: {
            type: Sequelize.STRING
        },
        game_release: {
            type: Sequelize.STRING
        },
        game_genre: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return Games;
};