import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { IntroCompComponent } from './intro-comp/intro-comp.component';
import { ExperienceCompComponent } from './experience-comp/experience-comp.component';
import { SkillsCompComponent } from './skills-comp/skills-comp.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';




@NgModule({
  declarations: [
    AboutCompComponent,
    HeaderNavComponent,
    IntroCompComponent,
    ExperienceCompComponent,
    SkillsCompComponent,
    ContactCompComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutCompComponent,
    HeaderNavComponent,
    IntroCompComponent,
    ExperienceCompComponent,
    SkillsCompComponent,
    ContactCompComponent
  ]
})
export class LayoutModule { }
