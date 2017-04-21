import { animate, transition, trigger, state, style } from '@angular/animations';

export const Animations = {
    flyInFromBelow: trigger('flyInFromBelow', [
        state('in', style({ transform: 'translateY(0)', opacity: 1})),
        transition('void => *', [
            style({transform: 'translateY(100%)', opacity: 0}),
            animate('600ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    swapRightFirst: trigger('swapRightFirst', [
        state('inactive', style({
            transform: 'translateX(0)'
        })),
        state('active', style({
            transform: 'translateX(318%)'
        })),
        transition('inactive => active', animate('300ms ease-in')),
        transition('active => inactive', animate('300ms ease-out'))
    ]),
    swapRightSecond: trigger('swapRightSecond', [
        state('inactive', style({
            transform: 'translateX(0)'
        })),
        state('active', style({
            transform: 'translateX(318%)'
        })),
        transition('inactive => active', animate('300ms ease-in')),
        transition('active => inactive', animate('300ms ease-out'))
    ])
}
