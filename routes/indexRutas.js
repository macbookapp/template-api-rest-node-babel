import { Router } from 'express'
import IndexController from '../controllers/IndexController'

const router = Router()


module.exports = () => {

    router.get('/', IndexController.index)
    
    return router
}