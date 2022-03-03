const express = require('express');
const { appendFile } = require('fs');
const router = express.Router()
const path = require('path')
const myDatabase = require('../database/myDatabase')



router.get('/', (req, res)=>{
    // res.send('this is home page')
    let myJson = [{ name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}];
    // console.log(myDatabase.getAllElements());
    // myDatabase.createCollection();
    // res.send(JSON.stringify(myDatabase.getAllElements()))
    let myData = myDatabase.getAllElements((items)=>{
        res.send(items)
    });
    console.log('mydata is ',myData)
});

router.post('/postdata', (req, res)=>{
    let myObj = req.body
    myDatabase.insertElements(myObj);
    res.send(myObj)
});

module.exports = router