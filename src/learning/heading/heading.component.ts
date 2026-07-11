import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, input, OnChanges, OnDestroy, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-heading',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
//,,AfterContentInit,AfterContentChecked
export class HeadingComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy{
  
 
 @Input('user') user:any =undefined;
 @Input('manager') manager: any =undefined;

  ngOnChanges({manager}: SimpleChanges): void {
    console.log(manager);
  }
  

 
  ngOnInit(): void {
    console.log('From on init')
  }
   ngDoCheck(): void {
     console.log('Docheck called');
   }

   ngAfterContentInit(): void {
    console.log('After content init method  called');
  }

    ngAfterContentChecked(): void {
    console.log('After Content Checked method called');
  }

     ngAfterViewInit(): void {
  console.log('After view Init called');
  }
  
   ngAfterViewChecked(): void {
     console.log('After view checked');
   }
  
   ngOnDestroy(): void {
    console.log('on destroy called');
   }
 

 

  
 


}
