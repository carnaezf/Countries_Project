const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('Activity', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate : {
          min: 1,
          max: 5,
          isEven(value) {
            if(value < 1 || value > 5) {
              throw new Error("Difficulty must be between 1 and 5")
            }
          }
        }
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 24,
          isEven(value) {
            if(value < 1 || value > 24) {
              throw new Error('The duration should be between 1 and 24 hrs.')
            }
          } 
        }   
      },
      season: {
        type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
        allowNull: false,
      },

      countries:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      }
    } , {
      timestamps: false
    }
    )};