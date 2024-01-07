import {type z} from "zod";
import {type ReleaseObjectStoredSchema} from "./ReleaseObjectStoredSchema";

export type ReleaseObjectStored = z.infer<typeof ReleaseObjectStoredSchema>
