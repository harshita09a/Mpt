import{Component, OnInit, Input} from '@angular/core';

import { ActivatedRoute,Params } from '@angular/router';
import { AlbumService } from './app.albumservice';
@Component({
    selector:'show-comp',
    templateUrl:'albumlist.html'
})
export class ListAlbumComponent{
    constructor(private service:AlbumService){}
    
    showalbumAll:any[]=[];
    
    ngOnInit(){
        this.showalbumAll=this.service.getAllAlbum();
    }
    deleteAlbum(data:number):any{
        this.showalbumAll.splice(data,1);
        confirm('Are you sure you want to delete?');
        
      }
   
}