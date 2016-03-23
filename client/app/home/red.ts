import {Component} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'red',
    templateUrl: 'red.html'
})

export class Red {
    
    color: string

    constructor(public _socketService: SocketService) {
        _socketService.event2().subscribe((data) => {
            this.color = data;
        })
    }

}