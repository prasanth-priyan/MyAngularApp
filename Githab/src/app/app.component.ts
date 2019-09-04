import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Githab';
  public val:string;
  constructor(private router:Router){
  }
  searchEvent(){
    this.router.navigate(['/search',this.val]);
  }

}
