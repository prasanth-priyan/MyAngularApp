import { Component, OnInit, Input } from '@angular/core';
import { GithabService } from 'src/app/services/githab.service';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';

@Component({
  selector: 'user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  public val;
  private users=new Observable();
  @Input() public repo;
  constructor(private _githabService:GithabService, private router:Router){
    this._githabService.getUser().subscribe((user:any) => {
      this.users=user;
      console.log(this.users);
    });
  }
  ngOnInit() {
  }
  searchEvent(){
    this.router.navigate(['/search',this.val]);
  }

}
