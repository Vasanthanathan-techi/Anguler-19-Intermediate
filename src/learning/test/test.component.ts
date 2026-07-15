import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  family =[
     {name:'nathan vasanth',age:30},
      {name:'jasmine',age:18},
        {name:'sam',age:6},
        {name:'megha',age:2},
  ];

  type: 'KIDS' |'ELDERS'='ELDERS';

  getkids(){
    return this.family.filter(x=>x.age<13);
  }
  getelder(){
    return this.family.filter(X=>X.age>=13);
  }

}
