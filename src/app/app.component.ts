import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../shared/components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from '../learning/heading/heading.component';
import { User } from '../shared/models/user.model';
import { timeout } from 'rxjs';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet,SideBarComponent,FormsModule,HeadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showHeading = true;

  ngOnInit(): void {
    setTimeout(()=>{
this.user={...this.user,name:'nathan'}

    },2000);

    setTimeout(() => {
    this.showHeading=false; 
    }, 5000);
  }
  user:User={
    name:'vasanth',
    gender:'m',
    age:30,
  };

  onSucces($e:User){
    this.user=$e;

  }
  onFailuere($e:{error:String}){
    console.log($e)
  }
  }

