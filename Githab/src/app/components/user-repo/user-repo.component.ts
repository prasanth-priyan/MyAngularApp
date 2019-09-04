import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GithabService } from 'src/app/services/githab.service';
import { RepoDataService } from 'src/app/services/repo-data.service';

@Component({
  selector: 'user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

  
  public val;
  private users:any;
  constructor(private _githabService:GithabService,private repodataService:RepoDataService ,private router:Router){
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
  detailsEvent(query){
    this.router.navigate(['/repos',query]);
  }
  deleteEvent(fname){
    this.repodataService.deleteRepository(fname).subscribe();
  }
  newRepo(repodata){ 
    console.log(repodata);
    // User data which we have received from the registration form.
    this.repodataService.newRepository(repodata).subscribe((response)=>{
      console.log(response);
     }); 
  }
}
