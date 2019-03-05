import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeamContainerComponent } from './components/team-container/team-container.component';
import { ChatContainerComponent } from './components/chat-container/chat-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamContainerComponent,
    ChatContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
