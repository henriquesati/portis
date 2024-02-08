import koa from 'koa'
import bodyParser from "koa-bodyparser";
import koabody from 'koa-body'
import Router from 'koa-router'
import { createPositionController } from './controllers/createPositionController';
import { Context } from 'vm';
import {getAllPositionsController} from './controllers/getAllPositionsController'
import { get } from 'http';

const app = new koa();
const router = new Router();    
const createPosition = new createPositionController();
app.use(koabody())
router.get("/", (ctx: Context)=>{
    console.log('helloworlds')
    ctx.body = 'hello world'
})

router.get("/teste", (ctx: Context) => {
    ctx.body = "hello world"
})


router.post("/create", createPosition.handle)
router.get("/positions", getAllPositionsController)


app.use(router.routes())

app.listen(3200, ()=>{
    console.log("listen");
})
export default app;