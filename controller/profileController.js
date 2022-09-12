const express = require('express')
const router = express.Router()

const { db, auth } = require('./../firebase.js');

router.get('/userProfile', async (req, res) => {

    const userRes = await auth().getUser(req.uid)
    await db.collection('users').get(userRes);

    res.json(userRes)
    res.send("Usuario Agregado con exito")

    console.log(userRes)
})