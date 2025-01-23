import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriterUrl)
        .setProject(conf.appwriterProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredimages, status, name , userid}){
        try {
            return await this.databases.createDocument(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featuredimages,
                    status,
                    userid,
                }
            )
            
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredimages, status , userid}){
        try {
            return await this.databases.updateDocument(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                slug,
                {
                    userid ,
                    title,
                    content,
                    featuredimages,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }


    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriterBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriterBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriterBucketId,
            fileId
        )
    }

    async getPostsByUser(userid) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                [
                    
                    Query.equal('userid', userid)
                ]
            );
            return response
        } catch (error) {
            console.error('appwriteService :: getPostsBYUser :: error', error);
        }
    }

    async ContactUs ({email , content , name}){
        try {
            return await this.databases.createDocument(
                conf.appwriterDatabaseID,
                conf.appwriterContactUs,
                ID.unique(),
                {
                    email,
                    content,
                    name
                }
            )
            
        } catch (error) {
            console.log("Appwrite serive :: contactus :: error", error);
        }
    }

    async updateUser(userid, data) {
        try {
            const response = await this.databases.updateDocument(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                userid,
                data
            );
            return response;
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }
    
    async fetchUserData(userid) {
        try{
            const respond = await this.databases.getDocument(
                conf.appwriterDatabaseID,
                conf.appwriterCollectionId,
                userid
            );
            return respond;
        }
        catch(error){
            console.log("Error in fetching user data",error)
        }
    }
}
const service = new Service()
export default service
