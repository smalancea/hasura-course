import { Request, Response, logger} from "firebase-functions";

export const createUserHandler = async (
    request: Request,
    response: Response
) => {
    try {
        logger.log(request.body);
        response.status(200).send({
            id: "dummy-id",
            email: "dummy-email",
            displayName: "dummy-display-name",
        });
    } catch (error) {
        response.status(500).send({ message: `Message: ${error.message}` });
    }
}