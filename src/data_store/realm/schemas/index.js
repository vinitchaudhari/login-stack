import { ENCRYPTION_KEY, REALM_MIGRATIONS, SCHEMA_VERSION } from "../other/keys";
import { loggedUserSchema } from "./loggedUserSchema";
import { usersSchema } from "./usersSchema";

const schemasNames = [
    usersSchema,
    loggedUserSchema
]

export const databaseOption = {
    schema: schemasNames,
    schemaVersion: SCHEMA_VERSION,
    deleteRealmIfMigrationNeeded: REALM_MIGRATIONS,
    encryptionKey: ENCRYPTION_KEY,
};