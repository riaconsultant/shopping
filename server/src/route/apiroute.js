const router = require('express').Router();
const jsonData = require('../data/products.json');
const list = require('../data/list.json');
const jsonfile = require('jsonfile');
// const { json } = require('body-parser');
const file_path = '../data/list.json';

router.get('/test', (req, res) => {
    res.status(200).json({message: 'API run successfully'});
});
router.get('/products', (req, res) => {
    res.status(200).json(jsonData);
});
router.get('/products/:id', (req, res) => {
    const data = jsonData.filter((val) => val.id == req.params.id);
    res.status(200).json(data);
});
router.post('/products', (req, res) => {
    const update_data = [...jsonData, req.body];
    res.status(200).json(update_data);
});
router.put('/products/:id', (req, res) => {
    const data = jsonData.filter((val)=> val.id!=req.params.id);
    const update_data = [...data, req.body];
    res.status(200).json(update_data);
});
router.delete('/products/:id', (req, res) => {
    const data = jsonData.filter((val)=> val.id!=req.params.id);
    res.status(200).json(data);
});

router.get('/list', (req,res) => {
    res.status(200).json(list);
});
router.post('/list', (req,res) => {
    const update_data = [...list, req.body];
    console.log(update_data);
    jsonfile.writeFile(file_path, update_data, () => {
        res.status(200).json(update_data);
    });
    // res.status(200).json(list);
});
router.put('/list', (req,res) => {
    const data = list.filter((val)=> val.id!=req.params.id);
    const update_data = [...data, req.body];
    jsonfile.writeFile(file_path, update_data, () => {
        // res.status(200).json(update_data);
    });
    res.status(200).json(update_data); 
});
router.delete('/list', (req,res) => {
    const data = list.filter((val)=> val.id!=req.params.id);
    jsonfile.writeFile(file_path, data, () => {
    });
    res.status(200).json(data);
});

module.exports = router;