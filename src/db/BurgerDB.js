import { Burger } from "../models/Burger.js"

class BurgerDb {
    constructor() {
        this.burgers = [

            new Burger({ id: 1, name: 'Double Double', price: '$4.99' }),
            new Burger({ id: 2, name: 'Flying Dutchman', price: '$2.99' })
        ]

    }

}

export const burgerDb = new BurgerDb()


