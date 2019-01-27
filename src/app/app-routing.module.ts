import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { MainComponent } from './components/main/main.component';
import { StartComponent } from './components/start/start.component';
import { TextoComponent } from './components/texto/texto.component';
import { WinComponent } from './components/win/win.component';
import { LoseComponent } from './components/lose/lose.component';
import { CreditsComponent } from './components/credits/credits.component';

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'texto', component: TextoComponent },
  { path: 'home', component: MainComponent },
  { path: 'win', component: WinComponent },
  { path: 'lose', component: LoseComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
