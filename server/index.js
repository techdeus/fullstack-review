const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const github = require('../helpers/github.js');

let app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
	github.getReposByUsername(req.body.term, (error, response, body) => {
		console.log('Body', JSON.parse(body));
		if (error) {
			res.status(500).send(error);
		} else {
			// console.log(body);
			db.save(JSON.parse(body));
			res.send('post successful');
		}
	});
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.status(200);
  db.fetch(res.send.bind(res));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
