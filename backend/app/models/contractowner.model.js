module.exports = (sequelize, Sequelize) => {
    const Contractor = sequelize.define("ContractOwnerTbs", {
        Contract_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Contract_name: {
        type: Sequelize.STRING
      },
      Contract_email: {
        type: Sequelize.STRING
      },
      Contract_designation: {
        type: Sequelize.STRING
      },
      Contract_phone: {
        type: Sequelize.STRING
      },
      Company_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { 
          model: 'CompanyTbs',
          key: 'Company_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      }
    });
  
    return Contractor;
  };
   
