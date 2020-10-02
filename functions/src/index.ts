import * as functions from 'firebase-functions';
import * as express from 'express';
import routes from './routes/index';

const api = express()

api.use(express.json());
api.use(routes);

exports.api = functions.https.onRequest(api)

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// const helloWorld = functions.https.onRequest((_request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
