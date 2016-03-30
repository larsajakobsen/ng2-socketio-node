import {Component, OnInit} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'drum',
    templateUrl: 'drum.html'
})

export class Drum implements OnInit {

    color: string
    private audio: HTMLAudioElement

    constructor(public _socketService: SocketService) {

    }

    ngOnInit() {

        this.audio = new Audio();
        this.audio.src = "./sounds/bass2.wav";
        this.audio.load();

        this._socketService.drum().subscribe((data) => {
            console.log(data);
            this.color = data;
            this.audio.play();
        })
    }

}