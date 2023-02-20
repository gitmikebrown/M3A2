const sql = require('mssql');
const dbConnection = require('../config.env');
console.log(dbConnection);

async function getSalesProducts(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
        SELECT TOP(2)
        D.SalesOrderDetailID, H.OrderDate
        FROM SalesLT.SalesOrderDetail AS D
        INNER JOIN SalesLT.SalesOrderHeader AS H
        ON (D.SalesOrderID=H.SalesOrderID)
`);

console.log(`Returned SQL results`);
    return results;
}

//Export
module.exports = {getSalesProducts :getSalesProducts};