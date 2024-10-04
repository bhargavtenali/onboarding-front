import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import EmployeeCard from "./EmployeeCard";
import { deleteEmployee } from "../../redux/employeeSlice";

const EmployeeList = ({ employees }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={() => handleDelete(employee.id)}
        />
      ))}
    </motion.div>
  );
};

export default EmployeeList;
