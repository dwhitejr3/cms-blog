const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model{}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,  
        },
        
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        user_id: {
            type: DataTypes.INTEGER,
            refrences: {
                model:'user',
                key: 'id',
            } 
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  },
)


module.exports = Comments;

