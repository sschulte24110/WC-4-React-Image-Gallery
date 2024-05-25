const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const photoID = req.params.id;
  const sqlText = `UPDATE gallery SET likes=(likes+1) WHERE id=$1;`;
  pool
    .query(sqlText, [photoID])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(`error adding a like:`, error);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = 'SELECT * FROM gallery ORDER BY title;';
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`Got gallery from the server:`, result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
