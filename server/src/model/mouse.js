module.exports = (sequelize, DataTypes) => {
    const Mouse = sequelize.define('Mouse', {
        model: DataTypes.STRING,
        size: DataTypes.STRING,
        buttons: DataTypes.STRING,
        weight: DataTypes.STRING,
        sensitivity: DataTypes.STRING,
        type: DataTypes.STRING
    })

    Mouse.prototype.comparePassword = function (password) {
        if (password == this.password) {
            return true
        }
        return false
    }

    User.associate = function (model) { }
    
    return Mouse;
}