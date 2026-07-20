import { Component,OnInit,computed,signal,effect,Injector, inject , untracked} from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnInit{
  injector =inject(Injector)
name =signal('vasanth nathan');
age=signal(30);
gender=signal('female');
 

isMajor =computed(()=>{
  if (this.gender()=='male') {
    return this.age()>=18?true:false;
  }else{
    return false;
  }
  })
afterEffect = effect(()=>{
  console.log('the age is'+this.age()+'and my gender is'+ untracked(this.gender))
  },{injector:this.injector});

  constructor(){
    
  }

//   constructor(){
//     effect(()=>{
// console.log('the age is'+this.age())
//     });
//   }

  runAfterEffect(){
       effect(()=>{
console.log('the age is'+this.age())
    },{injector:this.injector});
  }

 ngOnInit():void{
  
//this.name.set('vazzy');
 // this.name.update((value)=>value+'jasmine')

setTimeout(()=>{
  this.gender.set('male')
  //this.age.set(10)
},2000);
}





 






  
  
  

  // family =[
  //    {name:'nathan vasanth',age:30},
  //     {name:'jasmine',age:18},
  //       {name:'sam',age:6},
  //       {name:'megha',age:2},
  // ];

  // type: 'KIDS' |'ELDERS'='ELDERS';

  // getkids(){
  //   return this.family.filter(x=>x.age<13);
  // }
  // getelder(){
  //   return this.family.filter(X=>X.age>=13);
  // }
 
}
