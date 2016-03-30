import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Drum} from './drum';
import {Hihat} from './hihat';
import {Note} from './note';

@Component({
    selector: 'home',
    directives: [
        Drum,
        Hihat,
        Note
    ],
    template: `
    <div>
        <drum></drum>
        <hihat></hihat>
        <note soundUri="./sounds/c1.wav"></note>
        <note soundUri="./sounds/clap.wav"></note>
        <note soundUri="./sounds/cowbell.wav"></note>
    </div>`
})
export default class Home {
    
    constructor() {

    }

}