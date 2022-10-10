import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { GroupComponent } from './group/group.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'chatroom', component:ChatroomComponent},
  {path: 'account', component:AccountComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'group', component:GroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
