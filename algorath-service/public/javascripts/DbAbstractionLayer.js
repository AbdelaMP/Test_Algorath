var mongodb = require('mongodb');

var connected = false;
var db = null;

mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }).then(connection => {
    connected = true;
    db = connection.db('algorath');
    console.log("DB Conection successful");
}).catch(error => {
    console.log("Error in connecting to DB");
});

async function queryUsersCollection() {
    if (connected) {

        let jsonResponse = {
            "users": []
        };

        const usersCollectionArray = await db.collection('Users').find().toArray();

        usersCollectionArray.forEach(element => {

            let userElement = {};
            userElement['id'] = element['id'];
            userElement['name'] = element['name'];
            jsonResponse.users.push(userElement);
        });

        return jsonResponse;

    } else {
        return null;
    }
}

module.exports = { queryUsersCollection };