import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
import { notifyAboutCommentHandler } from "./notifyAboutComment";
import { createUserHandler } from "./createUser";
import { getProfileHandler } from "./getProfile";
import initApolloServer from "./remoteSchema";

export const notifyAboutComment = functions.https.onRequest(
    notifyAboutCommentHandler
);

export const createUser = functions.https.onRequest(createUserHandler);
export const getProfile = functions.https.onRequest(getProfileHandler);
export const userProfile = functions.https.onRequest(
    initApolloServer.createHandler()
);

admin.initializeApp(functions.config().firebase);
