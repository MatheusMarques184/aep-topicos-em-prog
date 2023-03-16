import {Request, Response} from 'express'
import { writeFile, readFile } from "fs/promises"

class ProductService {
    public async createProduct(data) {
        try{
            await writeFile("products.json", JSON.stringify(data,null, 2))
        } catch(e) {
            console.log(e)
        }
    }

    public async findProduct() {
        const getProducts = await readFile("products.json", "utf-8")
        return JSON.parse(getProducts)
    }
    
    public async findStock() {
        const getProducts = await this.findProduct()
        const productsStock: Array<object> = []
        getProducts.forEach((product) => productsStock.push({ "nome": product.nome, "qtde": product.qtde, "preco": product.preco ,"valor_estoque": product.qtde * product.preco}))
        return productsStock
    }
}

export default new ProductService()