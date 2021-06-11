import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const notifyAboutComment = functions.https.onRequest(
    (request, response) => {
  functions.logger.info("Request body", request.body);
  response.send("Hello from Firebase!");
});
