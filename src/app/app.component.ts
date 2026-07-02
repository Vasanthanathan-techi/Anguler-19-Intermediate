import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../shared/side-bar/side-bar.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
classname='p-5 text-6xl';
name='vasanthanathan';
onChange($e: Event){
   this.name=($e.target as HTMLInputElement).value;
}

  }

