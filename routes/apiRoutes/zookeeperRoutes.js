const {
  filterByQuery,
  findById,
  createNewZookeeper,
  validateZookeeper,
} = require("../../lib/zookeepers.js");

const { zookeepers } = require("../../data/zookeepers");
const router = require('express').Router();

router.get('/zookeepers', (req,res) => {
  let results = zookeepers;

  if (req.query) {
      results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.get('/zookeepers/:id', (req,res) => {
  const result = findById(req.params.id, zookeepers);
  if (result) {
      res.json(result);
  }
  else {
      res.sendStatus(404);
  }
});

router.post('/zookeepers', (req,res) => {
  req.body.id = zookeepers.length.toString();
  //req.body is where the incoming request be
  if (!validateZookeeper(req.body)) {
      res.status(400).send('Zookeeper is not properly formatted!!');
  }
  else {
      const zookeeper = createNewZookeeper(req.body, zookeepers);
      res.json(zookeeper);
  }   
});

module.exports = router;