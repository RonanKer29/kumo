"use server";

//*Create account flow :
//*1. User enters full name and email
//*2. Check if the user already exists using the email (we will use this to identify if we still need to create a user document or not)
//*3. send OTP to user's email
//*4. This will send a secret key for creating a session. The secret key OTP will be sent to the user's account email.
//*5. Create a new user document if the user is a new user
//*6. Return the user's accountId that will be used to complete the login
//*7. verify the OTP and authenticate to login

const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existingUser = await getUserByEmail(email);
};
