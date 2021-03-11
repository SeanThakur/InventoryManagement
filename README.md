# InventoryManagement

I have used react js for frontend along with material ui core/icon for components and redux for state management, for backend i have used node js with express js along with
mysql for database connection

Setting up Instructions

Install Mysql if you don't have it already and create a database named  inventory_management.

use XAMPP CONTROL PANEL for your mysql connection

Below i have provided the schema of the tables i have used in this database

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Location table Schema

![](Screenshots/locationSchema.png)

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Product table Schema

![](Screenshots/productSchema.png)

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Product Movement table Schema

![](Screenshots/productMovementSchema.png)

git clone https://github.com/SeanThakur/InventoryManagement.git

In the config folder you will find db.js file update your credentials (host, user and password)

For installing dependencies to server side and client side run 
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+)
npm install and npm run client-install  
in your base loaction

After installing dependencies, run this command 
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) npm run dev

App should now be running on http://localhost:3000/

- ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) Images of the Project.

- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Add Product Page`

![](Screenshots/addProduct.png)

- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Add Location Page`

![](Screenshots/addlocations.png)

- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Add Product Movement Page`

![](Screenshots/addProductMovement.png)

- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `All Product Page`

![](Screenshots/allProducts.png)

- ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Add View Product Movement Page`

![](Screenshots/viewProductMovement.png)
