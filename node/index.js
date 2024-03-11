const express = require('express')
const app = express()
const port = 5000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const myName = 'Willian';

const mysql = require('mysql')
const connection = mysql.createConnection(config);
var sql = `CREATE TABLE IF NOT EXISTS People(
    Id int auto_increment,
    Name varchar(30),
    primary key (Id)
)`;
connection.query(sql);

sql = `INSERT INTO People(Name) Values('${myName+(new Date().getMilliseconds())}');`;
connection.query(sql);
connection.end();

app.get('/', (req, res) => {

    const mysql = require('mysql')
    const connection = mysql.createConnection(config);
    const sql = `SELECT Name FROM People`;
    var names = []
    connection.query(sql, function(err, result, fields){
        if(err) throw err;
        result.forEach(e => names.push(e.Name));
        var storedNames = [];
        for(var name of names)
            storedNames.push(`<h4>${name}</h4>`);
        res.send(`
            <h1>Full Cycle Rocks!</h1>
            <br/>
            <h2>Now, the names inserted...</h2>
            ${storedNames.join('<br/>')}`
            )
        });
    connection.end();
})

app.listen(port, () => {
    console.log('Running at port ' + port)
});