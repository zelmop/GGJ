import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ParticlesModule } from 'angular-particle';
import { KonvaModule } from 'ng2-konva';

import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

// material
import { MatDialogModule } from '@angular/material/dialog';
import { DecisionComponent } from './components/decision/decision.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StartComponent } from './components/start/start.component';
import { TextoComponent } from './components/texto/texto.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DecisionComponent,
    StartComponent,
    TextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ParticlesModule,
    KonvaModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  entryComponents: [
    DecisionComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
