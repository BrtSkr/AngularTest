import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './components/user-data/user-data.component';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { HandleDataComponent } from './components/handle-data/handle-data.component';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';

const routes: Routes = [
 {path: 'countries', component: CountriesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
