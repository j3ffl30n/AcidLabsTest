'use strict';
const express = require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')
const { products, Products }   = require('./endpoints')
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
const productsHandlers = products({ Products })
const mongooseConfig = {useNewUrlParser: true, useUnifiedTopology: true}
const mongooseUrl = 'mongodb+srv://root:acidlabs123@cluster0.aw0ja.mongodb.net/acid?retryWrites=true&w=majority'

mongoose.connect(mongooseUrl, mongooseConfig)

var bodyParser = require('body-parser')
var cors = require('cors')

var corsOptions = {origin: true,credentials: true};

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())


app.get('/products',                        productsHandlers.getlist)
app.get('/products/id/:id',                     productsHandlers.getById)
app.get('/products/find/:mark',                  productsHandlers.getByParams)
app.post('/products',                       productsHandlers.post)
app.put('/products/:id',                    productsHandlers.put)
app.delete('/products/:id',                 productsHandlers.delete)


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);