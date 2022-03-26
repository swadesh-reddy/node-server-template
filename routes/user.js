/**
  * @swagger
  * definitions: 
  *   User: 
  *     type: object
  *     properties: 
  *       username: 
  *         type: string
  *       email: 
  *         type: string
  *       password: 
  *         type: string
 */
const express = require("express");
const router = express.Router();
const usercontroller = require("../contollers/user")

/**
  * @swagger
  * /register:
  *   post:
  *     tags:
  *     - register
  *     summary: create new user
  *     description: creates new user
  *     requestBody:
  *       content:
  *         application/json:
  *           schema:
  *             properties:
  *               username:
  *                 type: string
  *                 required: true
  *               password:
  *                 type: string
  *                 required: true
  *     responses:
  *         default:
  *           descripiton: successful operation
  */
router.post('/register', usercontroller.registerUser);

module.exports = router;