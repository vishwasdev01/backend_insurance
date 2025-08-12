// models/taskModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../db.js'; // Your Sequelize connection instance

const Task = sequelize.define('Task', {
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  income: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dependents: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  risk: {
    type: DataTypes.ENUM('Low', 'Medium', 'High'),
    allowNull: false,
  },
  recommendation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  explanation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tasks', // Make sure this matches your Supabase table
  timestamps: true,
});

export default Task;
