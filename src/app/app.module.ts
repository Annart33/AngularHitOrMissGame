import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { HighScoreService } from './services/high-score.service';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { FailComponent } from './components/fail/fail.component';
import { HighScoreComponent } from './components/high-score/high-score.component';
import { SuccessComponent } from './components/success/success.component';
import { MyDialogSuccessComponent } from './components/my-dialog-success/my-dialog-success.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { ValidNumberComponent } from './components/valid-number/valid-number.component';
import { ChooseFromOptionsComponent } from './components/choose-from-options/choose-from-options.component';
import { DonateComponent } from './components/donate/donate.component';


const routes: Routes =[
  {path: "main", component: MainComponent},
  {path: "", redirectTo: "main", pathMatch: "full"},
  {path: "fail", component: FailComponent },
  {path:"play", component: PlayGameComponent},
  {path: "highScore", component: HighScoreComponent},
  {path: "success", component: SuccessComponent},
  {path: "donation", component: DonateComponent},
  {path:"**", component: Page404Component}

];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    PlayGameComponent,
    MainComponent,
    MyDialogComponent,
    FailComponent,
    HighScoreComponent,
    SuccessComponent,
    MyDialogSuccessComponent,
    ComponentsComponent,
    ValidNumberComponent,
    ChooseFromOptionsComponent,
    DonateComponent
  ],

  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],

  entryComponents: [
    MyDialogComponent, 
    MyDialogSuccessComponent,
    ValidNumberComponent,
    ChooseFromOptionsComponent
  ],

  providers: [HighScoreService],
  bootstrap: [AppComponent]
})

export class AppModule { }