import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component'
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'user', component:UserRepoComponent },
  { path:'search/:query', component:UserSearchComponent },
  //{ path:'' },
  { path:'', redirectTo:'/user', pathMatch:'full' },
  { path:'**', component:PageNotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
