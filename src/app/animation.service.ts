import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class AnimationService {
    // Observable string sources
    private categorySelectedSource = new Subject<string>();
    private categorySwitchedSource = new Subject<string>();
    // Observable string streams
    categorySelected$ = this.categorySelectedSource.asObservable();
    categorySwitched$ = this.categorySwitchedSource.asObservable();
    // Service message commands
    categorySelected(level: string) {
        this.categorySelectedSource.next(level);
    }
    categorySwitched(state: string) {
        this.categorySwitchedSource.next(state);
    }
}