import express from "express";
import mysql from 'mysql'
import http from 'http'
import fetch from 'node-fetch'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import fs from 'fs'
import bodyParser from 'body-parser'
import multer from 'multer'
import path from 'path'
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
const PORT = process.env.PORT || 3001;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bookstore"
})
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.get('/api/users', (req, res) => {

    db.query("SELECT * FROM users",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to get list of users")
                throw err;
            }
            res.status(200).json(result)
        }
    )
})

app.get('/api/users/:id', (req, res) => {

    db.query("SELECT * FROM users where user_id='" + req.params.id + "' ",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to get user")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.post('/api/users/create', function (req, res) {
    db.query("INSERT INTO `users`(`user_id`, `user_email`, `user_password`, `user_first_name`, `user_last_name`, `user_role`) VALUES (NULL,'" + req.body.email + "','" + req.body.password + "','" + req.body.fname + "','" + req.body.lname + "','" + req.body.role + "')",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to create new user")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.put('/api/users/edit', function (req, res) {
    db.query("UPDATE `users` SET `user_email`='" + req.body.email + "',`user_password`='" + req.body.password + "',`user_first_name`='" + req.body.fname + "',`user_last_name`='" + req.body.lname + "',`user_role`='" + req.body.role + "' WHERE `user_id`=" + req.body.id + "",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to edit user")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.delete("/api/users/:deletedUserID", (req, res) => {
    db.query("DELETE FROM `users` WHERE `user_id`=" + req.params.deletedUserID + "",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to delete user")
                throw err;
            }


            res.status(200).json(result)
        }
    )

})
app.get('/api/books', (req, res) => {

    db.query("SELECT * FROM books",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to get list of books")
                throw err;
            }
            res.status(200).json(result)
        }
    )
})
app.get('/api/books/:id', (req, res) => {

    db.query("SELECT * FROM books where book_id='" + req.params.id + "' ",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to get book")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})

app.post('/api/books/create', function (req, res) {
    db.query("INSERT INTO `books`(`book_id`, `book_title`, `book_author`, `book_genre`, `book_picture`, `book_price`) VALUES (NULL,'" + req.body.title + "','" + req.body.author + "','" + req.body.genre + "','" + req.body.picture + "','" + req.body.price + "')",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to create new book")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.put('/api/books/edit', function (req, res) {
    db.query("UPDATE `books` SET `book_title`='" + req.body.title + "',`book_author`='" + req.body.author + "',`book_genre`='" + req.body.genre + "',`book_picture`='" + req.body.picture + "',`book_price`='" + req.body.price + "' WHERE `book_id`=" + req.body.id + "",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to edit book")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.delete("/api/books/:deletedBookID", (req, res) => {
    db.query("DELETE FROM `books` WHERE `book_id`=" + req.params.deletedBookID + "",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to delete book")
                throw err;
            }


            res.status(200).json(result)
        }
    )

})
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});