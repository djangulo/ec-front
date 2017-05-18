import {
    animate,
    AnimationTriggerMetadata,
    transition,
    trigger,
    state,
    style
} from '@angular/animations';

export const Animations = {
    flyStaffIn: trigger('flyStaffIn', [
        state('*', style({ transform: 'translate3d(-76%,0,0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(-76%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            style({transform: 'translate3d(-76%, -400%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ])
    ]),
    flyInternsIn: trigger('flyInternsIn', [
        state('*', style({ transform: 'translate3d(179%,25%,0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(179%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ])
    ]),
    flyNavRight: trigger('flyNavRight', [
        state('home', style({ transform: 'translate3d(0,0,0)' })),
        state('other', style({ transform: 'translateX(340%,0,0)' })),
        transition('home <=> other', animate('500ms ease-in'))
    ]),
    flySecondIn: trigger('flySecondIn', [
        state('noSelection', style({ transform: 'translate3d(-98%, 0, 0)', opacity: 1})),
        state('selection', style({ transform: 'translate3d(135%, 0, 0)', opacity: 1})),
        transition('void => selection', [
            style({transform: 'translate3d(135%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('void => noSelection', [
            style({transform: 'translate3d(-98%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
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
            animate('500ms ease-out')
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
        state('visible', style({ opacity: 1 })),
        state('invisible', style({ opacity: 0 })),
        transition('invisible <=> visible', animate('1000ms ease-in')),
    ]),
}
