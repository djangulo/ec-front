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
    flyYearsIn: trigger('flyYearsIn', [
        state('*', style({ transform: 'translate3d(246%, 79%, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(246%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-out', style({transform: 'translate3d(246%, -200%, 0)', opacity: 0}))
        ]),
    ]),
    flyMonthsIn: trigger('flyMonthsIn', [
        state('*', style({ transform: 'translate3d(147%, 233%, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(147%, 400%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-out', style({transform: 'translate3d(147%, -200%, 0)', opacity: 0}))
        ]),
    ]),
    flyArchivePressIn: trigger('flyArchivePressIn', [
        state('*', style({ transform: 'translate3d(-33%, -20%, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(-33%, 400%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-out', style({transform: 'translate3d(-33%, -300%, 0)', opacity: 0}))
        ]),
    ]),
    flyLatestPressIn: trigger('flyLatestPressIn', [
        state('*', style({ transform: 'translate3d(-68%, 0%, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(-68%, 400%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-out', style({transform: 'translate3d(-68%, -300%, 0)', opacity: 0}))
        ]),
    ]),
}
