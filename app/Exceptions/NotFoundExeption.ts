import { Exception } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new NotFoundExeption('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class NotFoundExeptionException extends Exception {
    constructor(message:string){
        super(message, 500, 'E_NOTFOUND_EXCEPTION')
    }
    public async handle (error: this, {response}: HttpContextContract) {
        response
          .status(error.status)
          .send(this.message)
    }
}
