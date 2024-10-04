import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import EmployeeList from "../Employee/EmployeeList";
import EmployeeForm from "../Employee/EmployeeForm";
import { fetchEmployees } from "../../redux/employeeSlice";

const HRDashboard = () => {
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

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
      <h1 className="text-3xl font-bold mb-4">HR Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Employee List</h2>
          <EmployeeList employees={employees} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
          <EmployeeForm />
        </div>
      </div>
    </motion.div>
  );
};

export default HRDashboard;
