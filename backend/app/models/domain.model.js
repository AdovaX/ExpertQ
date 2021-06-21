module.exports = (sequelize, Sequelize) => {
    const Domain = sequelize.define("DomainTb", {
        Domain_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Domain: {
        type: Sequelize.STRING
      },
      Parent_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Domain;
  };
    