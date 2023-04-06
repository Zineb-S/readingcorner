import express from "express";
import mysql from 'mysql'

import jwt from 'jsonwebtoken'
import cors from 'cors'
import fs from 'fs'
import bodyParser from 'body-parser'

import Stripe from "stripe";

const PORT = process.env.PORT || 3001;
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "bookstore"
})
const stripe = Stripe('sk_test_51MtbLbHz09nFNN1Jba1ZYva3bOXy6yOOcJaDWRsec68ypHbiP8d7wFNEHZsGgggpDAn50clplK641vGHBWNo7R5800P7Rf6GiI');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
var data = fs.readFileSync('./client/src/data/currentUser.json')
var myObject = JSON.parse(data);
const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {

        const token = authHeader.split(" ")[1];
        jwt.verify(token, "mySecretKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid !")
            }
            req.user = user;
            next();
        })
    }
    else {
        res.status(401).json("You are not authenticated ! ")
    }

}
const generateAccessToken = (user) => {
    if (user) {
        return jwt.sign({ id: user.user_id, role: user.user_role }, "mySecretKey") //{ expiresIn: "15m" }
    }

}
app.post("/api/login", (req, res) => {

    try {
        db.query("SELECT * FROM users where user_email='" + req.body.email + "'and user_password ='" + req.body.password + "'",
            function (err, result) {
                if (result.length != 0) {
                    const accessToken = generateAccessToken(result[0])

                    myObject.push(result[0], accessToken);
                    var newData2 = JSON.stringify(myObject);
                    fs.writeFile("./client/src/data/currentUser.json", newData2, (err) => {
                        // Error checking
                        if (err) throw err;
                        console.log("Current User Added");
                    });
                    res.status(200).json(myObject)
                }
                else {
                    res.status(400).json("Incorrect Email or Password !")

                }
            }
        )
    } catch (error) {
        console.log(error)
    }

}
)
app.post("/api/logout", verify, (req, res) => {
    res.status(200).json("You logged out successfully")
    let result = []
    fs.writeFile('./client/src/data/currentUser.json', JSON.stringify(result), (err) => {
        // Error checking
        if (err) {
            res.status(400).json("You failed to Log out")
            throw err;
        }

    })

})

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
app.get('/api/user/history/:id', (req, res) => {

    db.query("SELECT * FROM orders where user_id='" + req.params.id + "' ",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to get orders")
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
app.get('/api/orders', (req, res) => {

    db.query("SELECT * FROM orders",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to get list of orders")
                throw err;
            }
            res.status(200).json(result)
        }
    )
})
app.get('/api/orders/:id', (req, res) => {

    db.query("SELECT * FROM orders where user_id='" + req.params.id + "' ",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to get order")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.post('/api/orders/create', function (req, res) {
    db.query("INSERT INTO `orders`(`order_id`, `user_id`, `order_books`, `order_total`,`order_date`) VALUES (NULL,'" + req.body.id + "','" + req.body.books + "','" + req.body.total + "','" + req.body.date + "')",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to create new order")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.put('/api/orders/edit', function (req, res) {
    db.query("UPDATE `orders` SET `user_id`='" + req.body.id + "',`order_books`='" + req.body.books + "',`order_total`='" + req.body.total + "',`order_date`='" + req.body.date + "' WHERE `order_id`=" + req.body.orderid + "",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to edit order")
                throw err;
            }

            res.status(200).json(result)
        }
    )
})
app.delete("/api/orders/:deletedOrderID", (req, res) => {
    db.query("DELETE FROM `orders` WHERE `order_id`=" + req.params.deletedOrderID + "",
        function (err, result) {
            if (err) {
                res.status(400).json("Failed to delete order")
                throw err;
            }


            res.status(200).json(result)
        }
    )

})
app.post("/checkout", async (req, res) => {
    
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    let price = ""
    items.forEach((item)=> {
        if(item.id===1){price="price_1MtbntHz09nFNN1JB5EnvhCd"}
        if(item.id===2){price="price_1MtbqJHz09nFNN1JqRRaLhff"}
        if(item.id===3){price="price_1MtbqpHz09nFNN1JOIN9qD7I"}
        if(item.id===4){price="price_1MtbrHHz09nFNN1JPnYqEXGq"}
        if(item.id===5){price="price_1MtbrkHz09nFNN1JAn1Pnkei"}
        if(item.id===6){price="price_1MtbsJHz09nFNN1JI4sHTTPD"}
        if(item.id===7){price="price_1MtbswHz09nFNN1JIzx2QOsT"}
        if(item.id===8){price="price_1MtbtrHz09nFNN1J86yGapEw"}
        if(item.id===9){price="price_1MtbuEHz09nFNN1JnIMMmkL6"}
        if(item.id===10){price="price_1MtbuaHz09nFNN1JYfQHmEqD"}
        lineItems.push(
            {
                price: price,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});