const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;



//middleware
app.use(cors());
app.use(express.json());


//get

app.get('/', (req, res)=>{
    res.send('car doctor server is running!...');
})

app.listen(port, ()=>{
    console.log(`car doctor port is running on port: ${port}`);
})