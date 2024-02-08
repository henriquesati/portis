import {Request, Response, Context} from 'koa'

export function missingKeysHandle(ctx: Context, missingkeys: Array<string>){
    ctx.response.status = 400;
    ctx.body ={
        error: {
            message: "missing fields",
            fields: [missingkeys]
        }
    }
    return ctx
}

export function wrongTypeValuesHandle(ctx: Context, wrongTypeValues: Array<any>){
    ctx.response.status = 400;
    ctx.body = {
        error: {
            message: "invalid data type. must be num",
            fields: [wrongTypeValues]
        }
    }

}