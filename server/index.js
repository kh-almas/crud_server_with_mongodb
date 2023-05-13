const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;
const mongodb_username = process.env.MONGODB_USERNAME;
const mongodb_password = process.env.MONGODB_PASSWORD;



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


// const uri = `mongodb+srv://${mongodb_username}:${mongodb_password}@cluster.9zce0xe.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb://0.0.0.0:27017`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const database = client.db('crud');
        const userCollection = database.collection('users');

        app.get('/all-users', async (req, res) => {
            const cursor = userCollection.find();
            const user = await cursor.toArray();
            res.send(user);
        })

        app.post('/create', async (req, res) => {
            const addUser = req.body;
            const result = await userCollection.insertOne(addUser);
            res.send(result);
            console.log(addUser);
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



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