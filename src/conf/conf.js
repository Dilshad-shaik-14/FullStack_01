const conf={
    appwriterUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriterProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriterDatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriterBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriterCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    tinyApi:String(import.meta.env.VITE_APPWRITE_API_KEY),
    appwriterContactUs:String(import.meta.env.VITE_APPWRITE_CONTACT_US)
}

export default conf 