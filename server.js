const express = require('express');
const cors= require('cors');
const dotenv= require('dotenv');
const connectDB = require('../fitlog-server/config/db');
const workoutRouter =require('./routes/workoutRoutes')
const mealRouter =require('./routes/mealRoutes')
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();


const app = express();
app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/workout', workoutRouter )
app.use('/meal', mealRouter )

const PORT= process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

