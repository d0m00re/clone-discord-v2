import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response, application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as sequelizeService from "./Service/db/sequelize/init.sequelize";
import { Sequelize } from 'sequelize';

// model
import ModelUser from "./API/user/dao/sequelize/user.model";
import ModelGuild from "./API/chat/guild/dao/sequelize/guild.model";
import ModelRoom from "./API/chat/room/dao/sequelize/room.model";
import ModelRoomItem from "./API/chat/roomItem/dao/sequelize/roomItem.model";

// router
import routerChat from "./API/routes.chat";
import routerUser from "./API/user/routes/routes.user";

// init all model
const initAllModel = async (_sequelize: Sequelize) => {
  await ModelUser.sync({ alter: true });
  await ModelGuild.sync({ alter: true });
  await ModelRoom.sync({ alter: true });
  await ModelRoomItem.sync({ alter: true });
}



const app: Express = express();
const port = process.env.PORT;

const sequelize = sequelizeService.sequelize;
initAllModel(sequelize)

app.set('sequelize', sequelize);
//app.use(cors())
app.use(cors({
  credentials: true,
  //origin: "http://127.0.0.1:5173%http://localhost:5173%http://localhost:8000"
  origin: true//false
}));
app.use(cookieParser());
app.use(bodyParser.json())

app.use('/api/v1', routerChat);
app.use('/api/v1/user', routerUser)

app.get('/alive', (req: Request, res: Response) => {
  res.send("alive");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
