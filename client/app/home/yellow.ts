import {Component} from 'angular2/core';

import {SocketService} from '../services/socket.service';

@Component({
    selector: 'yellow',
    templateUrl: 'yellow.html'
})

export class Yellow {
    
    values: number[] = [];

    constructor(public _socketService: SocketService) {
        _socketService.event3().subscribe((data) => {
            console.log(data);
            this.values.push(data);
        })
    }

}