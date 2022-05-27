
mysql = require('mysql')


let base = mysql.createConnection({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'e-commerce'

})


module.exports=base;