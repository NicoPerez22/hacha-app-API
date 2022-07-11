const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const { db } = require('./firebase');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', async (req, res) => {

    const querySnapshot =  db.collection('users').get()
    console.log((await querySnapshot).docs[0].data())
    res.send('Pagina inicio')
})
app.use("/auth", require('./controller/auth'));

app.listen(port, () => console.log("Servidor Funcionando"))