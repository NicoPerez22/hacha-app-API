require('dotenv').config();

const { initializeApp, applicationDefault } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')
const { auth } = require('firebase-admin')

initializeApp({
    credential: applicationDefault()
})

const db = getFirestore()

module.exports = {
    db, auth
}