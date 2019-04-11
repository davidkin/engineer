import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.services';

import { IPosts } from '../shared/interface/posts.interface';
import { INews } from '../shared/interface/news.interface';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    displayedColumns: Array<string> = ['title', 'url', 'created_at','author'];
    list: Observable<IPosts[]>;

    constructor(
        private homeService: HomeService
    ) { }

    ngOnInit(): void {
        this.getAllArticles();
    }

    getAllArticles () { 
        return setInterval(() => {
            this.list = this.homeService.getPostsInfo().pipe(
                map((res: INews) => {
                    return res.hits
                })
            )
        }, 5000)
    }

    currencyArticle (post: IPosts ) {
        this.homeService.setPosts(post);
    }
}
