import conf from'../conf/conf.js';
import { Client, Account, ID} from 'appwrite';
 
export class AuthService {
    Client = new Client();
    Account;

    constructor(){
        this.Client
            .setEndpoint(conf.appwriterUrl)
            .setProject(conf.appwriterProjectId);
        this.Account = new Account(this.Client);
            
    }
    async CreateAccount({email, password, name}){
        try{
            const userAccount=  await this.Account.create(ID.unique(), email, password, name);
            if(userAccount){
                return this.Login({email, password});
                
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }

    async Login({email, password}){
        try{
            return this.Account.createEmailPasswordSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.Account.get();
        }
        catch(error){
            console.log("Appwrite service :: getCurrentUser :: error ::", error);
            
        }

        return null;
    }

    async Logout(){
        try{
            return this.Account.deleteSessions();
        }
        catch(error){
           console.log("Appwrite service :: Logout :: error ::", error);
        }
    }
}

const authService = new AuthService();

export default  authService;
