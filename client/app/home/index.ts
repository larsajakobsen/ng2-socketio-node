import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Blue} from './blue';
import {Red} from './red';
import {Yellow} from './yellow';

@Component({
    selector: 'home',
    directives: [
        Blue,
        Red,
        Yellow
    ],
    template: `
    <div>
        <blue class="box"></blue>
        <red class="box"></red>
        <yellow class="box"></yellow>
    </div>`
})
export default class Home {
    
    constructor() {

    }

}