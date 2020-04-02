module.exports = function(sequelize, DataTypes) {
    const Model = sequelize.define('User', {
      // The email cannot be null, and must be a proper email before creation
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: true
      },
    
      lastname: {
        type: DataTypes.STRING,
        allowNull: true
        
      },
      
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true
        }
      },
    
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: {
            args: [8, 16],
            msg: "Password must be between 8 and 16 characters long."
          }
        }
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true
      },
    
      birthday: {
        type: DataTypes.DATE,
        allowNull: true
      },
      created: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW
      },
      defaultValueBoolean: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: '1'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
  // add any necessary associate below:
    // User.associate = function (models) {
    //   User.hasMany(models, {
    //     onDelete: "cascade"
    //   });
    // };
    return Model
  }