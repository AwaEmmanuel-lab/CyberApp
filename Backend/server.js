import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { sql } from "./database.js";

const app = express();

dotenv.config();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

const port = process.env.PORT


async function createtable(){
    try {
        await sql `CREATE TABLE IF NOT EXISTS accountsecurity(
            id SERIAL PRIMARY KEY NOT NULL,
            qid VARCHAR(255) NOT NULL,
            answer DECIMAL(4,2) NOT NULL
        )`

        await sql `CREATE TABLE IF NOT EXISTS systemsecurity(
            id SERIAL PRIMARY KEY NOT NULL,
            qid VARCHAR(255) NOT NULL,
            answer DECIMAL(4,2) NOT NULL
        )`

        await sql `CREATE TABLE IF NOT EXISTS riskmanagement(
            id SERIAL PRIMARY KEY NOT NULL,
            qid VARCHAR(255) NOT NULL,
            answer DECIMAL(4,2) NOT NULL
        )`

    } catch (error) {
        // res.status(500).json({message:"Internal server error"})
        console.log("Internal server error: ", error)
        process.exit(1)
    }    
} 

app.post("/api/accountsecurity",async (req,res) => {


        try {
        const {qid, answer}=req.body;

        if(!qid || answer === undefined){
            console.log("Fields cannot be empty")
            return res.status(400).json({message: "Fields cannot be empty"})
        }

        const accountdoc = await sql `
        INSERT INTO accountsecurity(qid, answer)
        VALUES(${qid},${answer}) RETURNING *
        `

        console.log(accountdoc[0]);
        return res.status(200).json(accountdoc[0]);
        } catch (error) {
            console.log("error message: ",error)
            return res.status(500).json("Internal server error")
        }       
})

app.get("/api/accountsecurity", async (req,res) => {
    try {

        const accountdocs = await sql `
        SELECT * FROM accountsecurity
        `
        console.log(accountdocs)
        return res.status(200).json(accountdocs);
    } catch (error) {
        
        console.log("Internal server error: ", error) 
       return res.status(500).json({message:"Internal server error"})
    }
})

app.get("/api/sum/accountsecurity", async (req,res) => {
    try {
        const documents = await sql `
        SELECT COALESCE(SUM(answer), 0) AS accountsecurityscore FROM accountsecurity
        `

        res.status(200).json(documents[0].accountsecurityscore);
        console.log(documents[0].accountsecurityscore);
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.log("Internal server error: ", error)
    }
})





app.post("/api/systemsecurity",async (req,res) => {


        try {
        const {qid, answer}=req.body;

        if(!qid || answer === undefined){
            console.log("Fields cannot be empty")
            return res.status(400).json({message: "Fields cannot be empty"})
        }

        const accountdoc = await sql `
        INSERT INTO systemsecurity(qid, answer)
        VALUES(${qid},${answer}) RETURNING *
        `

        console.log(accountdoc[0]);
        return res.status(200).json(accountdoc[0]);
        } catch (error) {
            console.log("error message: ",error)
            return res.status(500).json("Internal server error")
        }       
})

app.get("/api/sum/systemsecurity", async (req,res) => {
    try {
        const documents = await sql `
        SELECT COALESCE(SUM(answer), 0) AS systemsecurityscore FROM systemsecurity
        `

        console.log(documents[0].systemsecurityscore);
        return res.status(200).json(documents[0].systemsecurityscore);
    } catch (error) {
      return res.status(500).json({message:"Internal server error"})
        console.log("Internal server error: ", error)  
    }
})

app.get("/api/systemsecurity", async (req,res) => {
    try {

        const accountdocs = await sql `
        SELECT * FROM systemsecurity
        `
        console.log(accountdocs)
        return res.status(200).json(accountdocs);
    } catch (error) {
        console.log("Internal server error: ", error) 
       return res.status(500).json({message:"Internal server error"})
    }
})





app.post("/api/riskmanagement",async (req,res) => {


        try {
        const {qid, answer}=req.body;

        if(!qid || answer === undefined){
            console.log("Fields cannot be empty")
            return res.status(400).json({message: "Fields cannot be empty"})
        }

        const accountdoc = await sql `
        INSERT INTO riskmanagement(qid, answer)
        VALUES(${qid},${answer}) RETURNING *
        `

        console.log(accountdoc[0]);
        return res.status(200).json(accountdoc[0]);
        } catch (error) {
            console.log("error message: ",error)
            return res.status(500).json("Internal server error")
        }       
})

app.get("/api/riskmanagement", async (req,res) => {
    try {

        const accountdocs = await sql `
        SELECT * FROM riskmanagement
        `
        console.log(accountdocs)
        return res.status(200).json(accountdocs);
    } catch (error) {
        console.log(documents[0].riskmanagementscore);
       return res.status(500).json({message:"Internal server error"})
    }
})

app.get("/api/sum/riskmanagement", async (req,res) => {
    try {
       
        const documents = await sql `
        SELECT COALESCE(SUM(answer), 0) AS riskmanagementscore FROM riskmanagement
        `
        console.log(documents[0].riskmanagementscore);
        return res.status(200).json(documents[0].riskmanagementscore);
    } catch (error) {
        console.log("Internal server error: ", error) 
        return res.status(500).json({message:"Internal server error"}) 
    }
})





app.get('/', (req,res)=>{
    res.send("Server is working");
})

createtable().then(
    app.listen(port, () =>{
    console.log("server is working");
})
)