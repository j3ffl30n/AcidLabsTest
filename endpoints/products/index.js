const express = require('express')
const app = express()

const handlers = ({ Products }) => ({
    getlist: async (req, res) => {
        try{
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            res.setHeader('Access-Control-Allow-Credentials', true);
            const result = await Products.find({}).exec()
            res.status(200).send(result)
        } catch (error) {
            console.log(`Hay un error en --> ${error}`);
            return error;
        }
    },

    getById: async (req, res) => {
        try{
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            res.setHeader('Access-Control-Allow-Credentials', true);
            const { id } = req.params
            const result = await Products.findById(id)
            res.status(200).send(result)
        }
        catch(error){
            console.log(`Hay un error en --> ${error}`);
            return error;
        }
    },


    getByParams: async (req, res, next) => {
        try{
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
            res.setHeader('Access-Control-Allow-Credentials', true);

            const { mark } = req.params
            const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
            const searchRgx = rgx(mark);
            const result = await Products.find({
                $or: [
                    { mark: { $regex: searchRgx, $options: "i" } },
                    { description: { $regex: searchRgx, $options: "i" } },
                ]
            });
            res.json(result);
        }
        catch(error){
            console.log(`Hay un error en --> ${error}`);
            return error;
        }
    },



    post: async (req, res) => {
        try {
            const { body } = req
            const product = new Products(body)
            await product.save()
            res.sendStatus(204)
        } catch (error) {
            console.log(`Hay un error en --> ${error}`);
            return error;
        }
    },
    put: async (req, res) => {
        try {
            const { body } = req
            const { id } = req.params
            const result = await Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            res.sendStatus(204)
        } catch (error) {
            console.log(`Hay un error en --> ${error}`);
            return error;
        }
    },
    delete: async (req, res) => {
        try {
            const { body } = req
            const { id } = req.params
            const result = await Products.findByIdAndRemove(id)
            res.sendStatus(204)
            
        } catch (error) {
            console.log(`Hay un error en --> ${error}`);
            return error;
        }
    }
})

module.exports = handlers