import React from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const TaskProgressBar = ({ tasks }) => {
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const totalTasks = tasks.length;
  const completionPercentage =
    Math.round((completedTasks / totalTasks) * 100) || 0;

  const data = [
    { name: "Completed", value: completedTasks },
    { name: "Remaining", value: totalTasks - completedTasks },
  ];

  const COLORS = ["#4CAF50", "#FFA000"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-800 p-4 rounded shadow-md"
    >
      <h3 className="text-lg font-semibold mb-4">Task Completion Progress</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-4">
        <p className="text-2xl font-bold">{completionPercentage}%</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {completedTasks} of {totalTasks} tasks completed
        </p>
      </div>
    </motion.div>
  );
};

export default TaskProgressBar;
