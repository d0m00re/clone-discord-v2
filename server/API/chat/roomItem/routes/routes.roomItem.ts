import express from 'express';
import * as controllerGuild from "../controller";
import * as schemaRoomItem from "../schema";
import * as mdwJoi from "../../../../middleware/Joi";

const router = express.Router();

/* ENUMERATION */
/* no coupled with anything */
// wtf
//rateLimiterFaciliter("uncritical"),  

router.get('/',
    mdwJoi.joiSchemaBodyValidation(schemaRoomItem.getAllSchema),
    controllerGuild.getAll);

router.post('/',
    mdwJoi.joiSchemaBodyValidation(schemaRoomItem.createOneSchema),
    controllerGuild.createOne);

export default router;
