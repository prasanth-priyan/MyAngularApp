import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  public val:string;
  repos:any;
  constructor(private favService:FavoriteService,private router:Router) { 
    this.favService.getRepos().subscribe((repos:any) => {
      this.repos=repos;
      console.log(this.repos);
    });
  }

  ngOnInit() {
  }

  detailsEvent(query){
    this.router.navigate(['/repos',query]);
  }
  deleteEvent(id){
    this.favService.delRepo(id).subscribe();
  }
}
