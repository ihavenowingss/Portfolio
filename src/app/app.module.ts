import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FrontHeadlineComponent } from './front/front-headline.component';
import { SidebarComponent } from './front/front-sidebar.component';
import { PostTextComponent } from './poster/post-text.component';
import { AsdComponent } from './front/asd.component';
import { LoadingComponent } from './loading/loading.component';
import { PostImageComponent } from './poster/post-image.component';



@NgModule({
  declarations: [
    AppComponent,
    FrontHeadlineComponent,
    SidebarComponent,
    PostTextComponent,
    AsdComponent,
    LoadingComponent,
    PostImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
