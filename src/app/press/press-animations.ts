import {
    animate,
    transition,
    trigger,
    state,
    style
} from '@angular/animations';

export const Animations = {
    flySecondIn: trigger('flySecondIn', [
        state('in', style({ transform: 'translate3d(49%, 0, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(49%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-out', style({transform: 'translate3d(49%, -200%, 0)', opacity: 0}))
        ]),
    ]),
    flyThirdIn: trigger('flyThirdIn', [
        state('*', style({ transform: 'translate3d(-70%, 0, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(-70%, 300%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-out', style({transform: 'translate3d(-70%, -200%, 0)', opacity: 0}))
        ]),
    ]),
}
