import {Component, OnInit} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'note',
    templateUrl: 'note.html',
    inputs: ["soundUri"]
})

export class Note implements OnInit {
    
    soundUri: string
    color: string
    private audio: HTMLAudioElement

    constructor(public _socketService: SocketService) {

    }
    
    ngOnInit(){
        
        this.audio = new Audio();
        this.audio.src = this.soundUri;
        this.audio.load();
        
        this._socketService.handleNote(this.soundUri).subscribe((data) => {
            this.color = data.color;
            this.soundUri = data.soundUri;
            this.audio.play();
        })
    }
    
    noteClick(){
        this._socketService.noteClick(this.soundUri);
    }

}