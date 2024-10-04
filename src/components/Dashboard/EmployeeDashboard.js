import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import TaskList from "../Task/TaskList";
import TaskProgressBar from "../Task/TaskProgressBar";
import { fetchEmployeeTasks } from "../../redux/taskSlice";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { tasks, loading } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchEmployeeTasks(user.id));
  }, [dispatch, user.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto mt-8 p-4"
    >
      <h1 className="text-3xl font-bold mb-4">Employee Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
          <TaskList tasks={tasks} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Onboarding Progress</h2>
          <TaskProgressBar tasks={tasks} />
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeeDashboard;
