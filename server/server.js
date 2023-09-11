const express = require('express');

const app = express();
const PORT = 3003;

app.get('/', (req, res) => {
    res.send('this is the gamestore server');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
