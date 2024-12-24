import { Google } from "arctic";

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_LINK } =
  process.env;

export const google = new Google(
  GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET!,
  GOOGLE_CALLBACK_LINK!
);
