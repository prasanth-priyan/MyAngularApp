import { Component, OnInit } from '@angular/core';
import { GithabSearchService } from 'src/app/services/githab-search.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite.service';


@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  repos:any;
  public val:string;
  public query:string;
  constructor(private _githabSearch: GithabSearchService, private route:ActivatedRoute,private router:Router,private favService:FavoriteService) {
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap) => this.query=params.get('query'));
    this._githabSearch.getRepo(this.query).subscribe((repos: any) => {
      this.repos = repos.items;
      console.log(this.repos);
    });
  }
  detailsEvent(query){
    this.router.navigate(['/repos',query]);
  }
  favEvent(repo){
    this.favService.addRepo(repo).subscribe();
  }
}
