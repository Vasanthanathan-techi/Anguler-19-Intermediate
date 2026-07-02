import { Component, Input, input } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-heading',
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {
@Input('heading')    title ='Default  Title';
@Input() user:User | undefined={name:'',gender:'',age:0};
}
