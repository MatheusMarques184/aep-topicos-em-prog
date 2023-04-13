import {Request, Response} from 'express'
import { stockService } from './stock.service'

class stockController {
    async stock(req: Request, res: Response) {
        const stockProducts = await new stockService().stock()
        return res.status(200).json(stockProducts)
    }

    async stockValue(req: Request, res: Response) {
        const stockValue = await new stockService().stockTotal()
        return res.status(200).json(stockValue)
    }
}

export default new stockController()