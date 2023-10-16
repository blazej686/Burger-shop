import { burgerDb } from "../db/BurgerDB.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
    async removeBurger(burgerId) {
        const burgerIdex = burgerDb.burgers.findIndex(burger => burger.id == burgerId)
        if (burgerIdex == -1) {
            throw new BadRequest(`invalid ID ${burgerId}`)
        }
        await burgerDb.burgers.splice(burgerIdex, 1)
    }
    async createBurger(burgerData) {
        if (burgerDb.burgers.length == 0) {
            burgerData.id = 1
        }
        else {
            const burgerIds = burgerDb.burgers.map(burger => burger.id)
            const largestBurgerId = Math.max(...burgerIds)
            burgerData.id = largestBurgerId + 1
        }
        const newBurger = new Burger(burgerData)
        await burgerDb.burgers.push(newBurger)
        return newBurger
    }
    async getBurgers() {

        const burgers = await burgerDb.burgers
        return burgers
    }

}


export const burgersService = new BurgersService()