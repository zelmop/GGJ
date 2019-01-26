import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
