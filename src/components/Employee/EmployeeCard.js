import React from "react";
import { motion } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white dark:bg-gray-800 p-4 rounded shadow-md mb-4"
    >
      <h3 className="text-xl font-bold mb-2">{employee.name}</h3>
      <p className="mb-1">Email: {employee.email}</p>
      <p className="mb-1">Department: {employee.department}</p>
      <p className="mb-1">Role: {employee.role}</p>
      <p className="mb-2">Onboarding Status: {employee.onboardingStatus}</p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => {
            /* Implement edit functionality */
          }}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          <FaEdit />
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition duration-200"
        >
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
