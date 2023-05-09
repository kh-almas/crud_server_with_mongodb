const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json());

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

app.post('/users', (req, res) => {
    console.log('data found');
    const addUser = req.body;
    console.log(addUser);
    addUser.id = 452 + people.length;
    console.log(addUser);
    people.push(addUser);
    res.send(addUser);
})

app.listen(port, () => {
    console.log('server is open in port 4000');
})