import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeout:displayNotification}">*This website uses cookies for better experience.
  <div class="close"><button class="btn" (click)="closeNotification()">x</button></div>
</div>
`,
  styles: ["div{margin:280px 0px; padding: 15px 20px; background-color:#21862d; text-align:center;}",".close{float: right;  margin-top: -13px;height: 10px; }",
  ".fadeout{visibility:hidden;opacity:0;transition:visibility 0s 2s,opacity 2s linear;}"
]
  
})
export class NotificationComponent {
displayNotification : boolean=false;
// function to close notification
closeNotification(){
this.displayNotification=true;
}
}
