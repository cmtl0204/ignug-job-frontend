import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfessionalComponent} from "./professional.component";

const routes: Routes = [
  {
    path: '',
    component:ProfessionalComponent,
  },
  {
    path: ':id/academic-formations',
    loadChildren: () => import('./academic-formation/academic-formation.module').then(m => m.AcademicFormationModule),
  },
  {
    path: ':id/courses',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule),
  },
  {
    path: ':id/experiences',
    loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule),
  },
  {
    path: ':id/languages',
    loadChildren: () => import('./language/language.module').then(m => m.LanguageModule),
  },
  {
    path: ':id/profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: ':id/references',
    loadChildren: () => import('./reference/reference.module').then(m => m.ReferenceModule),
  },
  {
    path: ':id/skills',
    loadChildren: () => import('./skill/skill.module').then(m => m.SkillModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule {
}
