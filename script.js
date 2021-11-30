import {
    MongoClient
} from "mongodb";

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://teamrob:teamrob@cluster0.bmqsg.mongodb.net/Challenge?retryWrites=true&w=majority";
const client = new MongoClient(url);

// The database to use
const dbName = "Challenge";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "people"
        const col = db.collection("challenges");

        // Construct a document                                                                                                                                                              
        let challengeDocument = {
            name: "test2",
            points: "76",
            course: "wwwww"
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(challengeDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);

//

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

let newChallenge = {
    name: req.body.name,
    course: req.body.course,
    points: req.body.points,
}


if (req.body.session) {
    newChallenge.challenge = req.body.session;
}


let insertResult = await.colli.insertOne(newChallenge);