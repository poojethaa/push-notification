import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change';
  //  test:{name:string,age:number};
  //  constructor(){
  //    this.test={
  //      name:'test',
  //      age:20
  //    };
  //  }
  //  change(){
  //    this.test.name="changed"
  //  }

  //  changeTwo(){
  //    this.test={
  //      name:'changetwo',
  //      age:22
  //    }
  //  }
  submit(){
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
    
    else if (Notification.permission === "granted") {
      
      var notification = new Notification("Hi there!");
    }
  
    
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
      
        if (permission === "granted") {
          var notification = new Notification("Hi!");
        }
      });
    }
  }
}


