import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ChecklistComponent } from './Components/checklist/checklist.component';
import { CoffeeChatComponent } from './Components/coffee-chat/coffee-chat.component';
import { ApplaudeComponent } from './Components/applaude/applaude.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServicesComponent } from './Components/services/services.component';
import { BlogComponent } from './Components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChecklistComponent,
    CoffeeChatComponent,
    ApplaudeComponent,
    AboutUsComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
