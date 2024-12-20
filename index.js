import express from 'express';
import Routes from './Routes.js'; 

const app = express();
app.use(express.json());          
app.use('/taskApp', Routes);  

const Port = 4000;

app.listen(Port, () => {
    console.log(`Server listening on port ${Port}`);
});
