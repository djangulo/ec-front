    import { Injectable }             from '@angular/core';
    import { Router, Resolve, RouterStateSnapshot,
             ActivatedRouteSnapshot } from '@angular/router';

import { Work, WorkPicture } from './work.model';
import { WorkService } from './work.service';

@Injectable()
export class WorkDetailResolver implements Resolve<Work> {
    constructor(
        private ws: WorkService,
        private router: Router
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<Work> {
    let id = route.params['id'];
    return this.ws.getWork(id).then(work => {
        if (work) {
            return work;
        } else { // id not found
            this.router.navigate(['/works/categories']);
            return null;
        }
    });
    }
}