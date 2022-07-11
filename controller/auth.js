const express = require('express')
const router = express.Router()

const { db, auth } = require('./../firebase.js');


router.post('/register', async (req, res) => {

    const userRes = await auth().createUser({
        userName: req.body.username,
        email: req.body.email,
        emailVerified: false,
        disabled: false
    })

    await db.collection('users').add({
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password,
        uid: userRes.uid
    });


    res.json(userRes)
    res.send("Usuario Agregado con exito")
})


module.exports = router