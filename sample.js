// To start I will need to make a main.js file along with a dao.js (or Data Access Object) file in the same directory as the package.json file.

// Inside dao.js I will add a imports for sqlite3 and Bluebird's Promise objects. After that I will scaffold out a data access class called AppObject that will establish a connection to the database inside a constructor and assign it to a member field called db.

const sqlite3 = require("sqlite3");
const Promise = require("bluebird");

class AppObject {
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log("Error running sql " + sql);
          console.log(err);
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }
}

module.exports = AppObject;
