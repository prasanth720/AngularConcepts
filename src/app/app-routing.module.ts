import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipesComponent } from './pipes/pipes.component';
import { ParentComponent } from './parent_child/parent/parent.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"todolist",component:TodolistComponent},
{path:'temform',component:TemplateFormsComponent},
{path:"reactiveform",component:ReactiveformsComponent },
{path:"interpolation",component:InterpolationComponent},
{path:"pipe",component:PipesComponent},
{path:"parent",component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
