import {Component} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'blue',
    templateUrl: 'blue.html'
})

export class Blue {
    
  color: string

    constructor(public _socketService: SocketService) {
        _socketService.event1().subscribe((data) => {
            this.color = data;
        })
    }

}