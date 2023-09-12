const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
    res.send('this is the gamestore server');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
