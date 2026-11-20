const express = require('express');

const app = express();
const PORT = 4000;
const apiRoutes = require('../src/routes/apiRoutes');
const mockRoutes = require('../src/routes/mockRoutes');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
});