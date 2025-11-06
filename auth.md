I am trying to add a google auth via this: https://authjs.dev/getting-started/installation?framework=npm

can you please help me do it?

Start by creating a new auth.ts file at the root of your app with the following content.
./auth.ts

import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
Add a Route Handler under /app/api/auth/[...nextauth]/route.ts.
This file must be an App Router Route Handler, however, the rest of your app can stay under page/ if you’d like.

./app/api/auth/[...nextauth]/route.ts

import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
Add optional Middleware to keep the session alive, this will update the session expiry every time its called.
./middleware.ts

export { auth as middleware } from "@/auth"
Setup Authentication Methods.

Let's do this first only.