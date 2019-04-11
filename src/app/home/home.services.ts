import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URl } from '../shared/api-config';
import { IPosts } from '../shared/interface/posts.interface';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
    post: Observable<IPosts>;

    constructor(
        private http: HttpClient
    ){}

    getPostsInfo () {
        return this.http.get(API_URl); 
    }

    setPosts (info) {
        this.post = info;
    }

    getPost () {
        return this.post;
    }
}