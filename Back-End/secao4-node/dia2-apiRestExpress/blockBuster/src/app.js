const express = require('express');
const path = require('path');
const { readData } = require('./utils/utils');

const app = express();
app.use(express.json());

const OK = 200;
const NOT_FOUND = 400;

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const moviesList = await readData(path.resolve(__dirname, './movies.json'));
  const movie = moviesList.find((movieId) => movieId.id === Number(id));
  if (!movie) {
    return res.status(NOT_FOUND).json('Movie not found');
  }
  res.status(OK).json({ movie });
});

module.exports = app;