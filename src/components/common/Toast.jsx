import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import "./Toast.css";

const Toast = ({ message, type, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={`toast-container ${type}`}
        >
          <div className="toast-content">
            {type === "success" ? (
              <FaCheckCircle className="toast-icon" />
            ) : (
              <FaExclamationCircle className="toast-icon" />
            )}
            <span className="toast-message">{message}</span>
          </div>
          <motion.div
            className="toast-progress"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 3, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
