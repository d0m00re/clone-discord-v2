import express from 'express';
import * as controllerUser from "../controller";
import * as schemaUser from "../schema";
import * as mdwJoi from "../../../middleware/Joi";
import * as mdwAuth from "./../../../middleware/auth";

const router = express.Router();

/* ENUMERATION */
/* no coupled with anything */
// wtf
//rateLimiterFaciliter("uncritical"),  

// me
router.get('/me',
    mdwJoi.joiSchemaBodyValidation(schemaUser.meSchema),
    mdwAuth.authenticate,
    controllerUser.me);
// register
router.post('/register',
    mdwJoi.joiSchemaBodyValidation(schemaUser.registerSchema),
    controllerUser.register);
// login
router.post('/login',
    mdwJoi.joiSchemaBodyValidation(schemaUser.loginSchema),
    controllerUser.login);

router.post('/logout',
    mdwAuth.authenticate,
    controllerUser.logout);

// get base info of an user

// get full info of an user

/*
router.get('/',
    mdwJoi.joiSchemaBodyValidation(schemaRoomItem.getAllSchema),
    controllerGuild.getAll);

router.post('/',
    mdwJoi.joiSchemaBodyValidation(schemaRoomItem.createOneSchema),
    controllerGuild.createOne);
*/

export default router;
