const express = require('express')
const app = express()
const port = 3000
const routeKu = require('./index')
 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods', 'GET, POST,PUT, PATCH, DELETE'
        );
        //return res.status(200).json({});
    }
    next();
});
 
app.use('/', routeKu);
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
