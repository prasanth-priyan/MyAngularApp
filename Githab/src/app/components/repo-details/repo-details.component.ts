import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GithabRepoService } from 'src/app/services/githab-repo.service';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repo:any;
  public val:string;
  public query:string;

  constructor(private _githabRepo: GithabRepoService, private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.query=params.get('query'));
    this._githabRepo.getDetails(this.query).subscribe((repo: any) => {
      this.repo = repo;
      console.log(this.repo);
    });
  }
  searchEvent(){
    this.router.navigate(['/search',this.val]);
  }
}
