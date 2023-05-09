const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

//middleware
app.use(cors());

const people = [
    {
        "id": 452,
        "name": "John Smith",
        "age": 25,
        "email": "john.smith@example.com"
    },
    {
        "id": 453,
        "name": "Jane Doe",
        "age": 30,
        "email": "jane.doe@example.com"
    },
    {
        "id": 454,
        "name": "Bob Johnson",
        "age": 40,
        "email": "bob.johnson@example.com"
    }
];


app.get('/', (req, res) => {
    res.send(people);
})

app.listen(port, () => {
    console.log('server is open in port 4000');
})