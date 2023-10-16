import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {

    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
            .delete('/:burgerId', this.removeBurger)
    }

    async getBurgers(request, response, next) {

        try {
            const burgers = await burgersService.getBurgers()

            return response.send(burgers)

        } catch (error) {
            next(error)
        }
    }

    async createBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgersService.createBurger(burgerData)

            response.send(burger)

        } catch (error) {
            next(error)

        }
    }

    async removeBurger(request, response, next) {

        try {
            const burgerId = request.params.burgerId
            await burgersService.removeBurger(burgerId)

        } catch (error) {
            next(error)
        }
    }


}