require("dotenv").config();
// require("./connection/mongodb");
const path = require('path')
const express = require("express");
const cors = require("cors");
const { performance } = require("perf_hooks");
const TextSchema = require("./models/content");

const PORT = process.env.PORT
let addCount = 0
let updateCount = 0
const app = express()

// Have Node serve files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

//to allow cross-origin-resource-sharing
app.use(cors())

app.all('/', async (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

//add request
app.post("/add", async (req, res) => {
    var startTime = performance.now();
    console.log(`\nadd request received`);
    addCount++;
    
    //clearing the collection
    // TextSchema.deleteMany({}, (err) => {
    //     if (err) {
    //         console.log("Error in deleteMany: " + err);
    //     } else {
    //         console.log("Collection cleared");
    //     }
    // })
    // let text = new TextSchema(req.body);
    // try {
    //     await text.save();
    //     res.send({
    //         text: text,
    //         message: "Text added successfully."
    //     });
    // } catch (error) {
    //     console.log(error.message);
    //     res.send({error: error.message});
    // }
    res.status(201).type('.html').send(`<h1> Precily <h1>`);
    var endTime = performance.now();
    console.log(`Total time taken in executing add request: ${endTime - startTime}ms\n`)
});

//update request
app.put("/update", async (req, res) => {
    var startTime = performance.now();
    console.log(`\nupdate request received`);
    updateCount++;
    // try {
    //     let id = 1;
    //     const options = {new: true, runValidators: true, context: "query"}
    //     let updatedText = await TextSchema.findByIdAndUpdate(id, req.body, options);
    //     if (updatedText) {
    //         res.json({
    //             message: "Updated successfully"
    //         });
    //     } else {
    //         res.status(400).json({
    //             message: "Unable to find the text"
    //         })
    //     }
    // } catch (error) {
    //     console.log(error.message);
    //     res.status(400).send({error: error.message});
    // }
    res.status(200).type('.html').send(`<h1> Precily <h1>`);
    var endTime = performance.now();
    console.log(`Total time taken in executing update request: ${endTime - startTime}ms\n`)
});

//count request
app.get("/count", (req, res) => {
    var startTime = performance.now();
    console.log(`\ncount request received`);
    res.json({
        addCount: addCount,
        updateCount: updateCount,
        totalCount: addCount + updateCount
    });
    var endTime = performance.now();
    console.log(`Total time taken in executing count request: ${endTime - startTime}ms\n`)
});

//healthcheck
app.get("/healthcheck", (req,res) => {
    var startTime = performance.now();
    console.log(`\nhealthcheck request received`);
    res.status(200).send("OK");
    var endTime = performance.now();
    console.log(`Total time taken in executing healthcheck request: ${endTime - startTime}ms\n`)
})

app.get('/api', (req,res) => {
    res.json({msg: "Work in progess..."})
})

app.listen(PORT, () => {
    console.log("Server is up and running at port: " + PORT);
})