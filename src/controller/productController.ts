import {Request, Response} from 'express'
import productService from '../service/productService'

class ProductController {
    public async create(req: Request, res: Response) {
        try{
            const products = productService.createProduct(req.body)
            return res.status(201).send(products)
        } catch(e) {
            console.log(e)
        }
    }

    public async find(req: Request, res: Response) {
        try{
            const products = await productService.findProduct()
            return res.status(200).send(products)
        } catch(e) {
            console.log(e)
        }
    }

    public async findStock(req: Request, res: Response) {
        try{
            const stock = await productService.findStock()
            return res.status(200).send(stock)
        } catch(e) {
            console.log(e)
        }
    }

    public async stockValue(req: Request, res: Response) {
        try{
            const stock = await productService.stockValue()
            return res.status(200).send(JSON.stringify(stock))
        } catch(e) {
            console.log(e)
        }
    }
}

export default new ProductController()