import { productService } from "src/products/product.service"

export class stockService {
    async stock() {
        const products = await new productService().findAll()
        const stock: any = []
        products.map((i) => {
                stock.push({
                    "name": i.name,
                    "quantity": i.quantity,
                    "price": i.price,
                    "stockValue": i.price * i.quantity
                })
        })
        return stock
    }

    async stockTotal() {
        const stock = await this.stock()
        let initialValue = 0
        const stockValue = stock.reduce((acc, value) => acc + value.stockValue, initialValue)
        return stockValue
    }
}