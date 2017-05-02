import express from 'express';
import mongodb from 'mongodb';



const app = express();
const dburl = 'mongodb://localhost/crudredux';

mongodb.MongoClient.connect(dburl, (error, db) => {

    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((error, games) => {
            res.json({games});
        });
    });

    app.listen(8080, () => {
        console.log('Server running on http://localhost:8080');
    });
});
