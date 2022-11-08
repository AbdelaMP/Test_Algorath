import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { ListUsersComponent} from './list-users/list-users.component';
import { CreateUsersComponent} from './create-users/create-users.component';
import { ListConnectionsComponent} from './list-connections/list-connections.component';
import { ConnectUsersComponent} from './connect-users/connect-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'list-users', component: ListUsersComponent },
  { path: 'create-user', component: CreateUsersComponent},
  { path: 'list-connections', component: ListConnectionsComponent },
  { path: 'connect-user/:id', component: ConnectUsersComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
