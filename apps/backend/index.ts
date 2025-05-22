import express from "express";
import { TrainModel, GenerateImage, GenerateImagesFromPack } from "common";
const app = express();


app.use(express.json());

app.post("/ai/training", (req, res)=>{

})

app.post("/ai/generate", (req, res)=>{

})

app.post("/pack/generate", (req, res)=>{

})

app.get("/pack/bulk", (req, res)=>{

})

app.get("/image", (req, res)=>{

})



const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is up and running on Port ${PORT}`)
})