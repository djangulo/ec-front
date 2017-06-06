import {
    animate,
    transition,
    trigger,
    state,
    style
} from '@angular/animations';

export const Animations = {
    flySecondIn: trigger('flySecondIn', [
        state('in', style({ transform: 'translate3d(-32%, 0, 0)', opacity: 1})),
        state('noSelection', style({ transform: 'translate3d(-32%, 0, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(-32%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
    ]),
}
