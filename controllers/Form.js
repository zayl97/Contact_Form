const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
}))

app.use(bodyParser.urlencoded({extended: true}))


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'contact_form'
})


app.post('/add-event', (req,res) => {

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const date = req.body.date

    db.query("INSERT INTO events (first_name, last_name, email, date) VALUES (?,?,?,?)", [firstName, lastName, email, date], (err, result) => {
        if(err) {
            res.send({err: err})
        } else {
            res.send(result)
        }
    })
})



app.listen(3001, () => {
    console.log("Server is running...")
})