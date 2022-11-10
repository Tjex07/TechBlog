const User = require('./User');
const Content = require('./Content');

Content.belongsTo(User, {
    foreignKey: 'userid',
    onDelete: 'CASCADE',
   
  });

module.exports = { User};
