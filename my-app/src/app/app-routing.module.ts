import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './components/user-data/user-data.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { HandleDataComponent } from './components/handle-data/handle-data.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'new', component: NewComponentComponent },
  {path: 'userData', component: UserDataComponent},
  {path: 'userData/handleData', component: HandleDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
