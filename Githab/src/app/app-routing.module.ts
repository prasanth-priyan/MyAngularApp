import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component'
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { FavListComponent } from './components/fav-list/fav-list.component';


const routes: Routes = [
  { path:'user', component:UserRepoComponent },
  { path:'search/:query', component:UserSearchComponent },
  { path:'repos/:query', component:RepoDetailsComponent },
  { path:'favorites', component:FavListComponent },
  { path:'', redirectTo:'/user', pathMatch:'full' },
  { path:'**', component:PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
