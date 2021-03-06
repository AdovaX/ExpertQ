const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.spocTb    = require("./spoc.model.js")(sequelize, Sequelize);
db.companyTb = require("./company.model.js")(sequelize, Sequelize);
db.resourceTb = require("./resource.model.js")(sequelize, Sequelize);
db.assignTb = require("./assign.model.js")(sequelize, Sequelize);
db.bankdetailsTb = require("./bankdetails.model.js")(sequelize, Sequelize);
db.contractownerTb = require("./contractowner.model.js")(sequelize, Sequelize);
db.documentsTb = require("./documents.model.js")(sequelize, Sequelize);
db.domainTb = require("./domain.model.js")(sequelize, Sequelize);
db.educationTb = require("./education.model.js")(sequelize, Sequelize);
db.experinceTb = require("./experience.model.js")(sequelize, Sequelize);
db.interview = require("./interview.model.js")(sequelize, Sequelize);
db.locations = require("./locations.model.js")(sequelize, Sequelize);
db.negotiation = require("./negotiation.model.js")(sequelize, Sequelize);
db.payment = require("./payment.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.requirement = require("./requirements.model.js")(sequelize, Sequelize);
db.roles = require("./roles.model.js")(sequelize, Sequelize);
db.support = require("./support.model.js")(sequelize, Sequelize);
db.techcategory = require("./technologycategory.model.js")(sequelize, Sequelize);
db.technology = require("./technology.model.js")(sequelize, Sequelize);
db.tier = require("./tier.model.js")(sequelize, Sequelize);
db.userroles = require("./userroles.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.resourceSkill = require("./resourceskill.model.js")(sequelize, Sequelize);
db.auditTrailTb = require("./audittrail.model")(sequelize, Sequelize);

 

module.exports = db;