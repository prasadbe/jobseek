import dump.sql to your database


change  the db configuration  in .env file

npm install

npm run build

npm run node


Technologies used  :

React, Redux, Node, Mysql (sequelize npm), Webpack

Application Doubts :

* To remove item from cart, please update the quantity  of the cart product is zero


* According to rule  User will get 1 qty free if User purchased 4 qty in cart ... 

  IN that scenario we offering below format

 `User tried to purchase 8 qty means am offering 2 qty extra with same 8 qty price`
 
 
 DB Migrations
 
 To run the migration & seeders instead import db
 
 change .env file in another location (app/config/.env)
 
 then follow below steps
 
 cd app
 
 ../node_modules/.bin/sequelize db:migrate
 
 ../node_modules/.bin/sequelize db:seed:all
 
 
 


