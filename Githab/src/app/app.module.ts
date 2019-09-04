import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRepoComponent } from './components/user-repo/user-repo.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { GithabService } from './services/githab.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { GithabSearchService } from './services/githab-search.service';
import { GithabRepoService } from './services/githab-repo.service';
import { FavoriteService } from './services/favorite.service';
import { RepoDataService } from './services/repo-data.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRepoComponent,
    UserSearchComponent,
    PageNotFoundComponent,
    RepoDetailsComponent,
    FavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithabService, GithabSearchService, GithabRepoService, FavoriteService, RepoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
