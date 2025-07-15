import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Gallery } from './gallery/gallery';
import { Services } from './services/services';

const routes: Routes = [
  {path:'home',component:Home},
  {path:'about',component:About},
  {path:'contact',component:Contact},
  {path:'gallery',component:Gallery},
  {path:'services',component:Services}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
