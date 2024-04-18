import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';
import { ParentComponent } from './parent_child/parent/parent.component';
import { ChildComponent } from './parent_child/child/child.component';
import { LifehooksComponent } from './lifehooks_angular/lifehooks/lifehooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodolistComponent,
    TemplateFormsComponent,
    ReactiveformsComponent,
    InterpolationComponent,
    PipesComponent,
    CustomPipe,
    ParentComponent,
    ChildComponent,
    LifehooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
