import {
    animate,
    transition,
    trigger,
    state,
    style
} from '@angular/animations';

export const Animations = {
    flySecondIn: trigger('flySecondIn', [
        state('selection', style({ transform: 'translate3d(208%, 0, 0)', opacity: 1})),
        state('noSelection', style({ transform: 'translate3d(54%, 0, 0)', opacity: 1})),
        transition('void => selection', [
            style({transform: 'translate3d(208%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('void => noSelection', [
            style({transform: 'translate3d(54%, 200%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ])
    ]),
    flySecondRight: trigger('flySecondRight', [
        state('selection', style({ transform: 'translate3d(208%,0,0)' })),
        state('noSelection', style({ transform: 'translate3d(54%, 0, 0)' })),
        transition('selection <=> noSelection', animate('500ms ease-out'))
    ]),
    flyThirdIn: trigger('flyThirdIn', [
        state('*', style({ transform: 'translate3d(-68%, 0, 0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translate3d(-68%, 300%, 0)', opacity: 0}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-out', style({transform: 'translate3d(-68%, -200%, 0)', opacity: 0}))
        ]),
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
    shrinkContainer: trigger('shrinkContainer', [
        state('false', style({
            margin: '0 5%',
            width: '90%',
            heigth: '90%'
        })),
        state('true', style({
            margin: '0 1%',
            width: '70%',
            height: '70%'
        })),
        transition('false => true', animate('400ms ease-in-out')),
        transition('true => false', animate('400ms 200ms ease-in-out')),
    ]),
    dropCaption: trigger('dropCaption', [
        state('false', style({
            bottom: 0,
            fontSize: '1em',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        })),
        state('true', style({
            bottom: '-20%',
            fontSize: '1.4em',
            backgroundColor: 'transparent',
        })),
        transition('true <=> false', animate('500ms ease-in-out')),
    ]),
    showDeets: trigger('showDeets', [
        state('false', style({
            opacity: '0',
            transform: "translate3d(200%, 0, 0)"
        })),
        state('true', style({
            opacity: '1',
            transform: "translate3d(0, 0, 0)"
        })),
        transition('true <=> false', animate('200ms ease-in-out')),
        transition('void => *', [
            style({opacity: 0, transform: "translate3d(200%, 0, 0)"}),
            animate('200ms 400ms ease-in-out')]),
        transition('* => void', [
            animate('200ms ease-in-out', style({opacity: 0, transform: "translate3d(200%, 0, 0)"}))]),            
    ]),
}
