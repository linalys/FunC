const express = require('express');

const app = express();

app.get('/api/costumers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'George', lastName: 'Kynigopoulos'},
        {id: 2, firstName: 'Marios', lastName: 'Nikas'},
        {id: 3, firstName: 'Lina', lastName: 'Lyssoudi'},
        {id: 4, firstName: 'Maria', lastName: 'Eskioglou'}
    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
