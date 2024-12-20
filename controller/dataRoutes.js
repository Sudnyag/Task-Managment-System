import { postData,allData, getData, updateData, deleteData} from "../models/task.js";

export const createTask = (req,res) =>{
  const {Title,Description,Status} = req.body;
 if(!Title || !Description)
 {
  return res.status(400).json({ error: "Title and Description are required." });
 }

 postData(Title,Description,Status)
    .then((data) => {
      res.status(201).json({ message: "Task Inserted", data }); 
    })
    .catch((err) => {
      console.error("Error inserting task:", err); 
      res.status(500).json({ error: "Task not inserted", details: err.message });
    });
};

export const readTask = (req, res) => {
  allData()
    .then((result) => {
      res.json({ message: "Task fetched successfully",
        data: result.rows,
      });
    })
    .catch((err) => {
      console.error("Error fetching task:", err);
      res.status(500).send("Unable to fetch task");
    });
};

export const getTask = (req, res) => {
  const TaskID = req.params.TaskId;
  getData(TaskID)
    .then((result) => {
      res.json({ message: "Task fetched successfully",
        data:result.rows[0]
      });
    })
    .catch((err) => {
      console.error("Error fetching task:", err);
      res.status(500).send("Unable to fetch task for given Id");
    });
};

export const updateTask = (req, res) => {
  const { TaskID, Title } = req.body; 

  updateData(TaskID, Title)
    .then((result) => {
      res.status(200).json({
        message: "Task Updated Successfully",
        data: { TaskID, Title }, 
      });
    })
    .catch((err) => {
      console.error("Error updating task:", err);
      res.status(500).json({ error: "Unable to update task for given ID", details: err.message });
    });
};

export const deleteTask = async (req, res) => {
  const TaskId = req.params.TaskId; 
  try {
    const result = await deleteData(TaskId);
    res.status(200).json({ message: 'Task deleted successfully', data: { TaskId } });
  } catch (err) {
    console.error('Error in deleteTask:', err);
    res.status(500).json({ error: err.message });
  }
};



