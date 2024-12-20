import express from 'express';
var router = express.Router();
import { createTask,deleteTask,getTask,readTask, updateTask } from './controller/dataRoutes.js';

router.get('/', function (req,res) {
  res.send("ITS A HOME PAGE!!");
})

router.post('/submit',createTask);
router.get('/getAll',readTask);
router.get('/get/:TaskId',getTask);
router.put('/update',updateTask);
router.delete('/delete/:TaskId',deleteTask);

export default router;