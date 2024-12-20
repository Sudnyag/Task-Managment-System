import pg from 'pg';

var Pool = new pg.Pool({
    user:"postgres",
    host:"localhost",
    database:"taskDB",
    password:"root",
    port:5432
});

Pool.connect((err)=>{
    if(err){
        console.log("Error connecting Database",err.stack);
    }
    else{
        console.log("Database connected successfully");
    }
})
 export default Pool;
