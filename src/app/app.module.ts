import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { ImageAIComponent } from './components/image-ai/image-ai.component';
import { VideoTabComponent } from './components/video-tab/video-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ImageAIComponent,
    VideoTabComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MatTabsModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
