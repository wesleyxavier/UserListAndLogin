import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { environment } from './../environments/environment.prod';
import { SessionState } from './app-redux/states/session.state';
import { LoginModule } from './login/login.module';
import { AngularMaterialModule } from './utils/app.module.material';
import { AppShellModule } from './app-shell/app-shell.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    AppShellModule,
    AngularMaterialModule,
    NgxsModule.forRoot([SessionState], {
      developmentMode: !environment
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'session'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
