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
        <drum class="box"></drum>
        <hihat class="box"></hihat>
        <note class="box" soundUri="./sounds/c1.wav"></note>
        <note class="box" soundUri="./sounds/clap.wav"></note>
        <note class="box" soundUri="./sounds/cowbell.wav"></note>
    </div>`
})
export default class Home {
    
    constructor() {

    }

}