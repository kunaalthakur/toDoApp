const tasksModel = require('../model/taskModules');

const addTask = async (req, res) => {

    try 
    {
        const { name, description, priority, status, dueDate } = req.body;
        if (!tname || !tdesc || !tpriority || !tstatus || !tDueDate) {

            return res.status(400).json({
                status: 400,
                success: false,
                msg: "Enter Data for all fields."
            });

        }
        else
        {
         const data=new taskModel(
            {
                tname:name,
                tdescription:description,
                tpriority:priority,
                tstatus:status,
                tdueDate:dueDate
            }
         )
        await data.save()
        return res.status(200).json({
            status: 200,
            success: true,
            msg: "Save Successfull.",
            data: data
        });
    }

    }
    catch (error) 
    {
        console.error(error);
        return res.status(500).json({
            status: 500,
            success: false,
            msg: "Internal Server Error!"
        });
    }
};

module.exports={addTask}