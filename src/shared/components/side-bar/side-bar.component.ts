import { Component } from '@angular/core';
import { SideBarItemComponent } from './side-bar-item/side-bar-item.component';

@Component({
  selector: 'app-side-bar',
  imports: [SideBarItemComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

 routes =[
  {path:['/'],name:'Home',},
{path:['/','notes'],name:'notes'},
{path:['/','trash'],name:'trash'},
{path:['/','test'],name:'Test',}
];

}
