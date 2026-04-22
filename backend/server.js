const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// DB connect
mongoose.connect('mongodb://chiragkp07_db_user:Mayan2006@ac-ygognj8-shard-00-00.7zbocdk.mongodb.net:27017,ac-ygognj8-shard-00-01.7zbocdk.mongodb.net:27017,ac-ygognj8-shard-00-02.7zbocdk.mongodb.net:27017/?ssl=true&replicaSet=atlas-k1o2y4-shard-0&authSource=admin&appName=Cluster0')
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

// Routes import
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

// Use routes
app.use('/', authRoutes);
app.use('/', expenseRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));