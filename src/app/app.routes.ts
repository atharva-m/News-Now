import { Routes } from '@angular/router';
import path from 'path';
import { HeadingComponent } from './heading/heading.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { PoliticsComponent } from './politics/politics.component';

export const routes: Routes = [
    {path: '', component: HeadingComponent},
    {path: 'tech', component: TechComponent},
    {path: 'business', component: BusinessComponent},
    {path: 'sports', component: SportsComponent},
    {path: 'entertainment', component: EntertainmentComponent},
    {path: 'health', component: HealthComponent},
    {path: 'hollywood', component: HollywoodComponent},
    {path: 'politics', component: PoliticsComponent},
];
