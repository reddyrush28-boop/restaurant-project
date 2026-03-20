const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.static("public"));

// 🧾 SAVE ORDER IN FILE
app.post("/order", (req, res) => {
  const newOrder = req.body;

  fs.readFile("orders.json", (err, data) => {
    let orders = [];

    if (!err && data.length > 0) {
      orders = JSON.parse(data);
    }

    orders.push(newOrder);

    fs.writeFile("orders.json", JSON.stringify(orders, null, 2), (err) => {
      if (err) {
        return res.send("Error saving order");
      }

      res.send("Order saved successfully");
    });
  });
});

// 📦 VIEW ALL ORDERS (ADMIN)
app.get("/orders", (req, res) => {
  fs.readFile("orders.json", (err, data) => {
    if (err) {
      return res.send([]);
    }

    res.json(JSON.parse(data));
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

 