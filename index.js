// index.js
import express from 'express';
import cors from 'cors';
import sequelize from './db.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = 5102;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', taskRoutes);

// Default test route
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

// Connect DB and start server
sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Database synced');
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ DB connection error:', err);
});
