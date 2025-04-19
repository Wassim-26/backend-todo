import Task from "../models/task.js";
export const getTasks = async (req, res) => {
  const user = req.userId;

  const Tasks = await Task.find({
    user: user,
  });

  res.status(200).send({
    success: true,
    message: "Tasks fetched successfully",
    data: Tasks,
  });
};
export const getTaskById = async (req, res) => {
  const id = req.params.id;
  const myTask = await Task.findOne({
    _id: id,
    user: req.userId,
  });

  if (myTask) {
    res.status(200).send({
      success: true,
      message: "Task fetched successfully",
      data: myTask,
    });
  } else {
    res.status(404).send({
      success: false,
      message: "Task does not exist",
    });
  }
};
export const createTask = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const user = req.userId;

  const newTask = await Task.create({
    title: title,
    description: description,
    user: user,
  });

  res.status(200).send({
    success: true,
    message: "Task added successfully",
    data: newTask,
  });
};
export const updateTask = async (req, res) => {
  const id = req.params.id;
  const newInfos = req.body;
  const updatedTask = await Task.findByIdAndUpdate(id, newInfos, {
    new: true,
  });
  res.status(200).send({
    success: true,
    message: "Task updated successfully",
    data: updatedTask,
  });
};
export const deleteTask = async (req, res) => {
  const id = req.params.id;
  const deletedTask = await Task.findByIdAndDelete(id);

  res.status(200).send({
    success: true,
    message: "Taskremoved successfully",
    data: deletedTask,
  });
};
