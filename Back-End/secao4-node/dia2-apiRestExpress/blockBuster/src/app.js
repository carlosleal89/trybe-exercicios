const express = require('express');
const path = require('path');
const { readData, writeData } = require('./utils/utils');

const app = express();
app.use(express.json());

const OK = 200;
const NOT_FOUND = 400;

const moviesListData = async () => {
  const data = await readData(path.resolve(__dirname, './movies.json'));
  return data;
};

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const moviesList = await moviesListData();
  const movie = moviesList.find((movieId) => movieId.id === Number(id));
  if (!movie) {
    return res.status(NOT_FOUND).json('Movie not found');
  }
  res.status(OK).json({ movie });
});

app.get('/movies', async (req, res) => {
  const moviesList = await moviesListData();
  res.status(OK).json(moviesList);
});

app.post('/movies', async (req, res) => {
  const moviesList = await moviesListData();
  const { id, movie, price } = req.body;
  moviesList.push({
    id,
    movie,
    price,
  });
  await writeData(moviesList, '../movies.json');
  res.status(OK).json({ id, movie, price });
});

app.put('/movies/:id', async (req, res) => {
  const moviesList = await moviesListData();
  const { movie, price } = req.body;
  const { id } = req.params;
  const updatedMovieList = moviesList.map((movieEl) => {
    if (movieEl.id === Number(id)) {
      const updatedMovie = {
        ...movieEl,
        movie,
        price,
      };
      return updatedMovie;
    }
    return movieEl;
  });
  await writeData(updatedMovieList, '../movies.json');
  res.status(OK).json({ id, movie, price });
});

app.delete('/movies/:id', async (req, res) => {
  const moviesList = await moviesListData();
  const { id } = req.params;
  const filteredMovieList = moviesList.filter((movie) => movie.id !== Number(id));
  await writeData(filteredMovieList, '../movies.json');
  res.status(204).end();
});

module.exports = app;