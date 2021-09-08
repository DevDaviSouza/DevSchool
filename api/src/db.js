import initdb from './models/init-models.js'
import Sequelize from 'sequelize';
const sequelize = new Sequelize(
'devmonk',
'root',
'10230aaaaA@', {
host: '127,0,0,1@3306',
dialect: 'mysql',
logging: false
});
const db = initdb(sequelize);
export default db;
