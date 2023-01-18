import routesGuild from "./chat/guild/routes/routes.guild";
import routesRoom from "./chat/room/routes/routes.room";
import routesRoomItem from "./chat/roomItem/routes/routes.roomItem";
import * as mdwAuth from "./../middleware/auth";

import express from 'express';

const router = express.Router();

router.use('/chat/guild',
    mdwAuth.authenticate,
    routesGuild);

router.use('/chat/room',
    mdwAuth.authenticate,
    routesRoom);

router.use('/chat/roomItem',
    mdwAuth.authenticate,
    routesRoomItem);

export default router;