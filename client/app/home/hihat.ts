import {Component, OnInit} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'hihat',
    templateUrl: 'hihat.html'
})

export class Hihat implements OnInit {

    color: string
    private audio: HTMLAudioElement

    constructor(public _socketService: SocketService) {

    }

    ngOnInit() {

        this.audio = new Audio();
        this.audio.src = "./sounds/hihat.wav";
        this.audio.load();

        this._socketService.hihat().subscribe((data) => {
            this.color = data;
            this.audio.play();
        })
    }

}