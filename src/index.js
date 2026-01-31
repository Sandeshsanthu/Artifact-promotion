const express = require('express');
const app = express();


app.get('/', (req, res) => {
res.json({
message: 'Helloss from Helm Artifact Promotion Demo',
version: process.env.APP_VERSION
});
});


app.listen(3000, () => console.log('App running on 3000'));
