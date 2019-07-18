import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddAlbumComponent} from './app.addAlbum';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule}from '@angular/forms';

import { ListAlbumComponent } from './app.listAlbum';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes=[
    {path:'',redirectTo:'list',pathMatch:'full'},
   {path:'add',component:AddAlbumComponent},
   {path:'list',component:ListAlbumComponent},
  
]; 
@NgModule({
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
        
    ],
    declarations: [
        AppComponent,AddAlbumComponent,ListAlbumComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }