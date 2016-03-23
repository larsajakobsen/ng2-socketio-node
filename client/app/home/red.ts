import {Component} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'red',
    templateUrl: 'red.html'
})

export class Red {
    
    values: number[] = [];

    constructor(public _socketService: SocketService) {
        _socketService.event2().subscribe((data) => {
            console.log(data);
            this.values.push(data);
        })
    }

}