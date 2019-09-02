import { Component, OnInit, Input } from '@angular/core';
import { GithabSearchService } from 'src/app/services/githab-search.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  private repos = new Observable;
  public query="";
  constructor(private _githabSearch: GithabSearchService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.query=params.get('query'));
    this._githabSearch.getRepo(this.query).subscribe((repos: any) => {
      this.repos = repos.items;
      console.log(this.repos);
    });
  }

}
