import Pool from "../connection.js";

export const postData = async (Title,Description,Status) =>{
    const insert_query = "INSERT INTO task(Title,Description,Status) VALUES ($1,$2,$3)";
    try {
      const result = await Pool.query(insert_query, [Title, Description, Status]);
      return result.rows[0];
    } catch (err) {
      console.error('Error in inserting task:', err);
      throw new Error('Failed to insert task into the database');
    }
  };

  export const allData = async () => {
    const select_query = "SELECT * FROM task";
    try{
      const result = await Pool.query(select_query);
      return result;
    }
    catch(err){
      console.error("Unable to fetch data");
    }
  };

  export const getData = async (TaskID) => {
    const query = 'SELECT * FROM task WHERE TaskId = $1'; 
    try{
      const result = await Pool.query(query, [TaskID])
      return result;
    }
    catch(err){
      console.error("Unable to fetch data fron given Id");
    }
  };

  export const updateData = async (TaskID, Title) => {
    const update_query = 'UPDATE task SET Title=$2 WHERE TaskId=$1';
    try {
        const result = await Pool.query(update_query, [TaskID, Title]);
        return result;
    } catch (err) {
        console.error("Unable to update data", err); 
        throw new Error('Failed to update task in the database'); 
    }
};


export const deleteData = async (TaskID) => {
  const delete_query = 'DELETE FROM task WHERE TaskId=$1';
  try {
   const result = await Pool.query(delete_query, [TaskID]);
    return result;
  } catch (err) {
    console.error('Unable to delete task:', err);
    throw new Error('Failed to delete task in the database');
  }
};



