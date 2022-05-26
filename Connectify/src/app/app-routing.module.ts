import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ApplaudeComponent } from './Components/applaude/applaude.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ChecklistComponent } from './Components/checklist/checklist.component';
import { CoffeeChatComponent } from './Components/coffee-chat/coffee-chat.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ServicesComponent } from './Components/services/services.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent},
  { path: 'checklist', component: ChecklistComponent},
  { path: 'coffee-chat', component: CoffeeChatComponent},
  { path : 'applaude' , component: ApplaudeComponent},
  { path : 'about' , component: AboutUsComponent},
  { path : 'services' , component: ServicesComponent},
  { path : 'contact' , component: ContactComponent},
  { path : 'blog' , component: BlogComponent},
  { path : '', component: HomePageComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
