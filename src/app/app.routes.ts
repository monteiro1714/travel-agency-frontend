import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {LandingComponent} from './pages/landing/landing.component';
import {PacksComponent} from './pages/packs/packs.component';
import {PromotionsComponent} from './pages/promotions/promotions.component';
import {GroupsComponent} from './pages/groups/groups.component';
import {SoloComponent} from './pages/solo/solo.component';
import {RegisterComponent} from './pages/register/register.component';
import {GuidesComponent} from './pages/guides/guides.component';
import {ContactsComponent} from './pages/contacts/contacts.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'destinations', component: LandingComponent},
  {path: 'promotions', component: PromotionsComponent},
  {path: 'packs', component: PacksComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'solo', component: SoloComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'guides', component: GuidesComponent},
  {path: 'contacts', component: ContactsComponent},
];
