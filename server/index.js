const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})