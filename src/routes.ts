import { Router } from 'express'
import productController from './products/product.controller'
import stockController from './stock/stock.controller'
import userController from './user/user.controller'

const routes = Router()

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

routes.post('/products', productController.create)
routes.get('/products', productController.findAll)
routes.get('/products/:id', productController.find)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)
routes.get('/products-random', productController.randomProducts)


routes.get('/products-stock-value', stockController.stockValue)
routes.get('/products-stock', stockController.stock)

export default routes