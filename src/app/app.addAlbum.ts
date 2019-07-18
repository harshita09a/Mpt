import{Component} from '@angular/core';
import { AlbumService } from './app.albumservice';
import { Router } from '@angular/router';
@Component({
    selector:'add-comp',
    templateUrl:'addalbum.html'
})
export class AddAlbumComponent{
    constructor(private service:AlbumService,private router:Router){}
   albumId:number;
    title:string;
    artist:string;
    price:number;
    
    empAll:any;
    addAlbum1():any{
        this.empAll={albumId:this.albumId,title:this.title,artist:this.artist,price:this.price}
          console.log("Employee Added...."+this.empAll);
          if(this.service.addAlbum(this.empAll)){
            this.router.navigate(['list'])
        }
    }
      
        
    
      }
    