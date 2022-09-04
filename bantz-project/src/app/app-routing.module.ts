import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'chatroom', component:ChatroomComponent},
  {path: 'account', component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
