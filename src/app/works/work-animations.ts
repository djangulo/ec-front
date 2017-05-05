import {
    animate,
    transition,
    trigger,
    state,
    style
} from '@angular/animations';

export const Animations = {
    flySecondIn: trigger('flySecondIn', [
        state('noSelection', style({ transform: 'translate3d(-98%, 0, 0)', opacity: 1})),
        state('selection', style({ transform: 'translate3d(135%, 0, 0)', opacity: 1})),
        transition('void => selection', [
            style({transform: 'translate3d(135%, 200%, 0)', opacity: 0}),
            animate('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        transition('void => noSelection', [
            style({transform: 'translate3d(-98%, 200%, 0)', opacity: 0}),
            animate('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flySecondRight: trigger('flySecondRight', [
        state('selection', style({ transform: 'translate3d(135%,0,0)' })),
        state('noSelection', style({ transform: 'translate3d(-98%, 0, 0)' })),
        transition('selection <=> noSelection', animate('500ms ease-in'))
    ]),
    flyThirdIn: trigger('flyThirdIn', [
        state('*', style({ transform: 'translate3d(-110%, 0, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(-110%, 200%, 0)', opacity: 0}),
            animate('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    deOpacify: trigger('deOpacify', [
        state('off', style({
            opacity: 0
        })),
        state('on', style({
            opacity: 1
        })),
        transition('off <=> on', animate('500ms ease-in'))
    ]),
    fade: trigger('fade', [
        state('out', style({ opacity: 0, backgroundColor: '#000' })),
        state('in', style({ opacity: 1, backgroundColor: 'none' })),
        transition('in <=> out', animate('300ms ease-in-out')),
    ]),
    fadeLight: trigger('fadeLight', [
        state('out', style({ opacity: 0, backgroundColor: '#000' })),
        state('in', style({ opacity: 0.7, backgroundColor: 'none' })),
        transition('in <=> out', animate('300ms ease-in-out')),
    ])
}
