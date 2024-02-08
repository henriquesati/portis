import { createPositionController } from "../controllers/createPositionController";
import { get } from "http";
import Koa from 'koa'
import Router from 'koa-router'

const createPosition = new createPositionController();
const Routes = new Router();

Routes
