import { Component, OnInit } from '@angular/core';
import { IPosts } from 'src/app/shared/interface/posts.interface';
import { HomeService } from '../home.services';
import { Observable } from 'rxjs';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    post: Observable<IPosts>;

    constructor(
        private homeService: HomeService
    ) { }

    ngOnInit(): void {}

    ngDoCheck(): void {
        this.post = this.homeService.getPost();
    }

    // hideModal () {        
    //     this.post = null;
    //     console.log(this.post);
    // }
}
