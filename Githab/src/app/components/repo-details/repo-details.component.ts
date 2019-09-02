import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GithabRepoService } from 'src/app/services/githab-repo.service';


@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  repo:any;
  public query="";

  constructor(private _githabRepo: GithabRepoService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.query=params.get('query'));
    this._githabRepo.getDetails(this.query).subscribe((repo: any) => {
      this.repo = repo;
      console.log(this.repo);
    });
  }

}
