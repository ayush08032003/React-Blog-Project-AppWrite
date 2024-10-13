const conf = {
  appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(process.env.REACT_APP_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.REACT_APP_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID),
};

export default conf;
// this helps in solving a lot of problems as sometimes typecasting will generate a lot of error.
// this makes life a MORE easier. 


