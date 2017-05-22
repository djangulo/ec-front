// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { WorkCategoriesComponent } from './work-categories/work-categories.component';
import { WorkListComponent } from './work-list/work-list.component';

// Routing
import { WorkRoutingModule } from './works-routing.module';

// Services
import { WorkService } from './work.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        WorkRoutingModule
    ],
    declarations: [
        WorkCategoriesComponent,
        WorkListComponent
    ],
    providers: [
        WorkService
    ]
})
export class WorksModule {}