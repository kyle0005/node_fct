'use strict';

import express from 'express';
import homeController from '../controller/v1/home';
const router = express.Router();

router.get('/home', homeController.getHome);
 
export default router