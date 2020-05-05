const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/api/costumers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'George', lastName: 'Kynigopoulos'},
        {id: 2, firstName: 'Marios', lastName: 'Nikas'},
        {id: 3, firstName: 'Lina', lastName: 'Lyssoudi'},
        {id: 4, firstName: 'Maria', lastName: 'Eskioglou'}
    ];

    res.json(customers);
});

const runCplusplusRouter = require('./routes/runCplusplus');
app.use('/api/run', runCplusplusRouter);



app.listen(port, () => console.log(`Server started on port ${port}`));
