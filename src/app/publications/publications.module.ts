import { HomeTextService } from './../home/home-text.service';
// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { PublicationCategoriesComponent } from './publication-categories/publication-categories.component';
import { PublicationListComponent } from './publication-list/publication-list.component';

// Routing
import { PublicationRoutingModule } from './publications-routing.module';

// Services
import { PublicationService } from './publication.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        PublicationRoutingModule
    ],
    declarations: [
        PublicationCategoriesComponent,
        PublicationListComponent
    ],
    providers: [
        PublicationService,
        HomeTextService
    ]
})
export class PublicationsModule {}