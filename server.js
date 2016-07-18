const express = require('express');
const bodyParser = require('body-parser');

const postsRouter = require('./server/postsRouter');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', (req, res, next) => {
  next();
});
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server is now listening on localhost:${PORT}`);
});
