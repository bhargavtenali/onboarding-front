import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { updateTaskStatus } from "../../redux/taskSlice";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  const handleTaskComplete = (taskId) => {
    dispatch(updateTaskStatus({ taskId, status: "completed" }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white dark:bg-gray-800 p-4 rounded shadow-md mb-4 flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {task.description}
            </p>
          </div>
          <button
            onClick={() => handleTaskComplete(task.id)}
            className={`p-2 rounded ${
              task.status === "completed"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            }`}
            disabled={task.status === "completed"}
          >
            <FaCheckCircle />
          </button>
        </div>
      ))}
    </motion.div>
  );
};

export default TaskList;
