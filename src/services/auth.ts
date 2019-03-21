import { Application } from "express";
import request, { RequestCallback } from "request";
import { BaseApiService } from "./apiservice";

type AuthCallback= (result: any) => any;

class AuthService extends BaseApiService {

    private baseUrl: string;
    private app: Application;
    
    constructor(app: Application) {
        super();
        this.baseUrl = process.env.AUTH_SERVICE_URL;
        this.app = app;
    }

    authenticate(requestId: string, username: string, password: string, 
        callback: RequestCallback) {
        // let caller handle api response
        request.post(this.baseUrl + '/api/v1/login', {
            headers: this.headers(requestId, username),
            body: {
                username: username,
                password: password
            }
        }, callback);
    }

    
}