// dont confuse it with conf.js, here all te work related to storage and databases will work.
import { Client, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite Service :: getPost() :: " + error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("Status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
        // queries must be wrapped in an array. see documentation.
      );
    } catch (error) {
      console.log("Appwrite Service :: getPosts() :: " + error);
      return false;
    }
  }

  async createPost({
    title,
    slug,
    content,
    featuredImg,
    status = "active",
    userId,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImg, status, userId }
      );
    } catch (error) {
      console.log("Appwrite Service :: createPost() :: " + error);
    }
  }

  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        { title, content, featuredImg, status }
      );
    } catch (error) {
      console.log("Appwrite Service :: updatePost() :: " + error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite Service :: deletePost() :: " + error);
    }
  }

  // ------------- from here on, we are dealing with storage sevices. -------------

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite Service :: uploadFile() :: " + error);
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite Service :: deleteFile() :: " + error);
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href;
    } catch (error) {
      console.log("Appwrite Service :: getFilePreview() :: " + error);
    }
  }
}

const service = new Service();
export default service;
