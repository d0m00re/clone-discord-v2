import { Sequelize } from 'sequelize-typescript';

const _port = (typeof (process?.env?.DB_PORT) === "string") ? parseInt(process?.env?.DB_PORT, 10) : undefined;

const initSequelize = () => {
    const sequelize = new Sequelize(process.env.DB_NAME ?? "", process.env.DB_USER ?? "", process.env.DB_PASS ?? "", {
        host: process.env.DB_HOST,
        port: _port,
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        models: [__dirname + '/**/*.model.ts']
    });
    return sequelize;
}

const sequelize = initSequelize();
// For each request, this middleware is called
/*
const DBConnection = async (req : any, res : any, next : any) => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    next();
};
*/
export { sequelize };