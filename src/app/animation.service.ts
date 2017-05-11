import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class AnimationService {
    // Observable string sources
    private categorySelectedSource = new Subject<string>();
    // Observable string streams
    categorySelected$ = this.categorySelectedSource.asObservable();
    // Service message commands
    categorySelected(level: string) {
        this.categorySelectedSource.next(level);
    }
}