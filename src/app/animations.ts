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
        state('home', style({ transform: 'translate3d(0,0,0)', opacity: 1})),
        state('other', style({ transform: 'translate3d(340%, 0, 0)', opacity: 1})),
        transition('void => home', [
            style({transform: 'translate3d(0, 100%, 0)', opacity: 0}),
            animate('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        transition('void => other', [
            style({transform: 'translate3d(340%, 100%, 0)', opacity: 0}),
            animate('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flyNavRight: trigger('flyNavRight', [
        state('home', style({ transform: 'translate3d(0,0,0)' })),
        state('other', style({ transform: 'translateX(340%,0,0)' })),
        transition('home <=> other', animate('500ms ease-in'))
    ]),
    flySecondIn: trigger('flySecondIn', [
        state('noSelection', style({ transform: 'translate3d(-50%, 0, 0)', opacity: 1})),
        state('selection', style({ transform: 'translate3d(135%, 0, 0)', opacity: 1})),
        transition('void => selection', [
            style({transform: 'translate3d(135%, 200%, 0)', opacity: 0}),
            animate('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        transition('void => noSelection', [
            style({transform: 'translate3d(-50%, 200%, 0)', opacity: 0}),
            animate('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flySecondRight: trigger('flySecondRight', [
        state('selection', style({ transform: 'translate3d(135%,0,0)' })),
        state('noSelection', style({ transform: 'translate3d(-50%, 0, 0)' })),
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
        state('visible', style({ opacity: 1 })),
        state('invisible', style({ opacity: 0 })),
        transition('invisible => visible', animate('1000ms ease-in')),
        transition('visible => invisible', animate('1000ms ease-in'))
    ]),
}
