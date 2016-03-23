import {Http, Headers} from 'angular2/http';
import {Injectable} from "angular2/core";

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

declare var io: any;

@Injectable()
export class SocketService {

    private _socket = io('http://localhost:3001');
  
    public values$: Observable<number[]>;
    private _valuesObserver: Observer<number[]>;
    
    public values: number[] = [];
    
    private _dataStore: {
        values: number[];
    };
    
    constructor() {
                     
        console.log("SocketService started");
                
        this._socket.on('connect', function(){
            console.log('Connection on port 3001');
        });
        
        this._socket.on('disconnect', function(){
            console.log('Disconnect on port 3001');
        });
        
    }
    
    event1():Observable<string> {
        return Observable.create((o) => {
            this._socket.on('event', (data) => {
                o.next(data.id);
            });
        })
    }
    
    event2():Observable<string> {
        return Observable.create((o) => {
            this._socket.on('event2', (data) => {
                o.next(data.id);
            });
        })
    }
    
    event3():Observable<string> {
        return Observable.create((o) => {
            this._socket.on('event3', (data) => {
                o.next(data.id);
            });
        })
    }
}