const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products_routes = require('./routes/product.js')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
    .then((result) => app.listen(5000))
    .catch((err) => console.log(Error))

app.use(express.json())
app.use('/api/products', products_routes)

/*const logger  = (req, res, next) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    res.send('Custom About page')
}

app.use(logger) // execute your middleware for all requests

const auth  = (req, res, next) => {
    const user = req.query.user
    if (user === 'admin') {
        req.user = { name: 'admin', id: 1 }
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}
app.use(auth)*/


/******************************** */

//return data 
/*app.get('/api/products', (req, res) => {
    res.json([
        { name: 'iPhone', price: 800 },
        { name: 'iPad', price: 650 },
        { name: 'iWatch', price: 750 }
    ])
})*/

/******************************** */

//Return data from data.js
/*app.get('/api/products', (req, res) => {
    res.json(products)
})*/

/******************************** */

//Return data from data.js without price 

/*app.get('/api/products', (req, res) => {
    const partial_products = products.map(product => {
        return { id: product.id, name: product.name }
    })
    res.json(partial_products)
})*/

/******************************** */

//return product using id 
/*app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

        if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})*/

/******************************** */
//return data with query 
/*app.get('/api/query', (req, res) => {
    const name = req.query.name.toLowerCase()
    const products_result = products.filter(product => product.name.toLowerCase().includes(name))

    if (products_result.length < 1) {
        return res.status(200).send('No products matched your search')
    }
    res.json(products_result)
})*/

//witout midelware 
/*app.get('/about', (req, res) => {
    console.log(req.url)
    console.log(req.params)
    console.log(req.query)
    return res.send('About Page')
})*/
//midelware 


/*app.get('/about', (req, res) => {
    console.log(req.user)
    return res.send('About Page')
})*/


//Create new product 
/*app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }
    products.push(newProduct)
    res.status(201).json(newProduct)
})*/

// Get all products 
/*app.get('/api/products', (req, res) => {
    res.json(products)
})*/

//Get product with id 
/*app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const product = products.find(product => product.id === id)

    if (!product) {
        return res.status(404).send('Product not found')
    }
    res.json(product)
})*/


//Update product with id

/*app.put('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }
    products[index] = updatedProduct
    res.status(200).json('Product updated')
})*/

//Delete product with id

/*app.put('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)
    const index = products.findIndex(product => product.id === id)
    if (index === -1) {
        return res.status(404).send('Product not found')
    }
    const updatedProduct = {
        id: products[index].id,
        name: req.body.name,
        price: req.body.price
    }
    products[index] = updatedProduct
    res.status(200).json('Product updated')
})
*/

//work with routes 

