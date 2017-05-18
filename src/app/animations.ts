import {
    animate,
    AnimationTriggerMetadata,
    transition,
    trigger,
    state,
    style
} from '@angular/animations';

export const Animations = {
    flyNavIn: trigger('flyNavIn', [
        state('lvl0', style({ transform: 'translate3d(0,0,0)', opacity: 1})),
        state('lvl1', style({ transform: 'translate3d(416%, 0, 0)', opacity: 1})),
        transition('void => lvl0', [
            style({transform: 'translate3d(0, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('void => lvl1', [
            style({transform: 'translate3d(416%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('lvl0 <=> lvl1', [
            animate('500ms ease-out')
        ])
    ]),
    flyNavRight: trigger('flyNavRight', [
        state('lvl0', style({ transform: 'translate3d(0,0,0)' })),
        state('lvl1', style({ transform: 'translateX(416%,0,0)' })),
        transition('lvl0 <=> lvl1', animate('500ms ease-in'))
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
        transition('invisible <=> visible', animate('700ms ease-in')),
    ]),
    parallax: trigger('parallax', [
            state('reset', style({ transformOrigin: "20% 20%", transform: "scale(1)" })),
            state('do', style({ transformOrigin: "80% 80%", transform: "scale(1.1)" })),
            transition('reset => do', animate('29s ease-out')),
            transition('do => reset', animate('0.1s linear'))
        ])
}
