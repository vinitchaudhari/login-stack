import { ENCRYPTION_KEY } from "../other/keys";


export const usersSchema = {
    name: "USER",
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