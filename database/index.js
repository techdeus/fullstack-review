const mongoose = require('mongoose');
// name of the database
mongoose.connect('mongodb://localhost/fetcher');

// define the database schema
let repoSchema = mongoose.Schema({
  id: Number, 
  name: String, 
  owner_login: String, 
  html_url: String,
  description: String, 
  stargazers_count: Number,
  watchers_count: Number,
  forks_count: Number,
  archived_at: {type: Date, default: Date.now }
});
// name of the collection
let Repo = mongoose.model('Repo', repoSchema);

let save = repos => {

	// instance of a model is called a document
	// responsible for creating and reading documents
	for ( var i = 0; i < repos.length; i++ ) {
      var doc = new Repo({
      
      id: repos[i].id,
      name: repos[i].name,
      // owner_login: repo.owner.login,
      html_url: repos[i].html_url,
      description: repos[i].description,
      stargazers_count: repos[i].stargazers_count,
      watchers_count: repos[i].watchers_count,
      forks_count: repos[i].forks_count, 
    })
    // TODO: Your code here
    // This function should save a repo or repos to the MongoDB
      doc.save(err => {
        if (err) {
          return console.log((err));
        }
      });
  }
}

let fetch = (callback) => {
  Repo.find({}, (error, repo) => {
    if (error) {
      callback(error, null);
    } else {
      callback(repo);
    }
  }).limit(10).sort({forks_count: 'desc'})
}

module.exports.save = save;
module.exports.fetch = fetch;