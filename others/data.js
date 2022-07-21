
// mysql = require('mysql')


// let base = mysql.createConnection({
    
//     host:'192.168.64.2',
//     user:'kionou',
//     password:'12345',
//     database:'e-commerce'

// })

const  Sequelize  = require("sequelize")



let sequelize = new Sequelize("e_commerce","postgres","Laloi2015",{
    dialect:'postgres',
    host:'localhost',
    port:'5432'
})

module.exports=sequelize;