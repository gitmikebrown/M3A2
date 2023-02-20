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
        CustomerID,
        AddressID,
        AddressType
        FROM
        salesLT.customerAddress
`);

console.log(`Returned SQL results`);
    return results;
}

//Export
module.exports = {getSalesProducts :getSalesProducts};