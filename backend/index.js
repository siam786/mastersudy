const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;

//middleare
app.use(cors());
app.use(express.json());

//add database
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jfpyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("modiz-bd");
    const serviceCollection = database.collection("services");

    ///get api
    app.get("/services", async (req, res) => {
      const cursor = serviceCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });
    //get single service
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      //console.log('getting specific service',id);
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.json(service);
    }); 

    //POST API
    app.post("/services", async (req, res) => {
      const service = req.body;
      console.log("hit the post", service);
      const result = await serviceCollection.insertOne(service);
     // console.log(result);
      res.send(result);
    });
    //delete api
    app.delete("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
    res.json(result);
    });
  } finally {
    //  await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running modiz hospital server");
});

app.listen(port, () => {
  console.log("Running modiz Server on port", port);
});
