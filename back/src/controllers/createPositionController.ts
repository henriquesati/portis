import {Request, Response, Context} from 'koa'
import { missingKeysHandle, wrongTypeValuesHandle } from '../routes/utils'
import koa from 'koa'
import {createPosition} from '../typos'
import {registry_dto} from '../index'
import { JsonContains } from 'typeorm';

const app = new koa();

export class createPositionController{
    async handle(ctx: Context){
        if (ctx.request.headers['content-type'] != 'application/json'){
            
            return ctx.status = 400;
        }
        const requiredKeys: (keyof createPosition)[] = [
            "asset",
            "quantity",
            "buy_price",
            "actual_price",
            "date_buy",
          ];
        const missingKeys: Array<string> = [];
        const wrongTypeValues: Array<any> = [];
        
        let position: createPosition = ctx.request.body as createPosition
            requiredKeys.map((x) =>{
                console.log(x)
                if (!(position as any)[x]){
                    missingKeys.push(x);
                }
                if (x != 'asset'){
                    position[x] = Number(position[x])
                    console.log("pos number = >" + position[x])
                    if (isNaN(position[x])){
                        wrongTypeValues.push(x)
                    }
                }
            })
                
            if (missingKeys.length>0){
                missingKeysHandle(ctx, missingKeys);
                return;
            }
            if (wrongTypeValues.length>0){
                console.log('wong values if ' + wrongTypeValues)
                wrongTypeValuesHandle(ctx, wrongTypeValues)
                return;
            }
            
        
        try{
            registry_dto(position)
        }catch(e){
            console.log(e);
        }
        return ctx.response.status = 200
    }
}