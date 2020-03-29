
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/api', async (req, res)=> {
    res.send({msg:'asdasd'})
})

app.get('/api/:id', async (req, res)=> {
    res.send({msg:'asdasd:'+req.params.id})
})

const port = process.env.PORT || 8090;
app.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
});

