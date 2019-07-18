import { Injectable, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
    providedIn:"root"
    
})

export class AlbumService{
    constructor(private http:HttpClient){}

    albumAll:any[]=[];

    getAllAlbum(){
        return this.albumAll;
    }
    addAlbum(data:any){
        this.albumAll.push(data);
        return true;
    }
}
