const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/sos', require('./routes/sosRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const escortRoutes = require('./backend/routes/escortRoutes');
app.use('/api/escort', escortRoutes);
