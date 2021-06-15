import * as functions from "firebase-functions";
import { notifyAboutCommentHandler } from "./notifyAboutComment";
import { createUserHandler } from "./createUser";

export const notifyAboutComment = functions.https.onRequest(
    notifyAboutCommentHandler
);

export const createUser = functions.https.onRequest(createUserHandler);