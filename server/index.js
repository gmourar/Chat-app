const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")

const app =  express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth" , userRoutes)

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conectado com o banco de dados")
}).catch((err)=>{
    console.log(err.message)
});

const envprocess = process.env.PORT;
const server = app.listen(envprocess , () =>{
    console.log(`Servidor rodando na porta: ${envprocess}`)
});