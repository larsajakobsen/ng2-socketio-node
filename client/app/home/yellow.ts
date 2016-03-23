import {Component} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'yellow',
    templateUrl: 'yellow.html'
})

export class Yellow {
    
    color: string

    constructor(public _socketService: SocketService) {
        _socketService.event3().subscribe((data) => {
            this.color = data;
        })
    }

}