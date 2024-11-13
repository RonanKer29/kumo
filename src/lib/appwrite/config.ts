export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,
  NEXT_APPWRITE_SECRET:
    "standard_2c5ec7dff4fd22de5930a0eb46e6811bb469fc43497d441b574d2303205d204a2553fa956cbacf21fac127571c8acebbf3d376c4bb546d41057235a6e3c13ab02e35b0e2f2de01fe5fe724b2b68c7b16308d5ee73a415ec1db58383bf49cf42fd19d1548c90c20faaf859ce76bef222bf14c8233d51b6fa28797d171e4390c39",
};
