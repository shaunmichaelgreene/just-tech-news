const { Model, DataTypes } = required('sequelize');
const sequelize = require('../config/connection');

//create Post model
class Post extends Model {}

//create fields/columns for Post model
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    port_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isURL: true
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
});

module.exports = { User, Post };