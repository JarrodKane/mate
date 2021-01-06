import path from 'path';
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '../public');

app.get('/', (req, res) => res.send('Express + Typescrypt server'));

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
