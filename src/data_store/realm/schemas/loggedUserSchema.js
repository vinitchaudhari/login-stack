import { ENCRYPTION_KEY } from "../other/keys";


export const loggedUserSchema = {
    name: "LOGGED_USER",
    primaryKey: "email",
    properties: {
        id: "string?",
        name: "string?",
        email: "string?",
        password: "string?",
        mobileNum: "string?",
        city: "string?",
        gender: "string?"
    },
    encryptionKey: ENCRYPTION_KEY,
};