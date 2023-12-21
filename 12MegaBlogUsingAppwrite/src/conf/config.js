import conf from "./conf";
import {Client, ID, Databases, Storage, Query} from "appwrite"


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage}){

    }
}

const service = new Service();

export default service;