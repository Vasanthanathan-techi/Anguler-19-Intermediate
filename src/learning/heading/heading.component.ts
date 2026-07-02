import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
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


@Output() success:EventEmitter<User>=new EventEmitter();
@Output() failure:EventEmitter<{error:String}>=new EventEmitter();

onSubmit(){
  if(this.user)this .user.name='vasantha nathan kumaran';

this.success.emit(this.user);
}

}
