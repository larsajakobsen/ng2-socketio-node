import {Http, Headers} from 'angular2/http';
import {Injectable} from "angular2/core";

import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

declare var io: any;

@Injectable()
export class SocketService {

    private _socket = io('http://localhost:3001');
      
    constructor() {
                     
        console.log("SocketService started");
                
        this._socket.on('connect', function(){
            console.log('Connection on port 3001');
        });
        
        this._socket.on('disconnect', function(){
            console.log('Disconnect on port 3001');
        });
        
    }
    
    drum():Observable<string> {
        return Observable.create((o) => {
            this._socket.on('drum', (data) => {
                o.next(data.color);
            });
        })
    }
    
    hihat():Observable<string> {
        return Observable.create((o) => {
            this._socket.on('hihat', (data) => {
                o.next(data.color);
            });
        })
    }
    
    handleNote(eventName: string):Observable<Note> {
        return Observable.create((o) => {
            this._socket.on(eventName, (data) => {
                console.log('handle ' + eventName + 'event');
                o.next(new Note(data.color, data.soundUri));
            });
        })
    }
    
    noteClick(soundUri: string){
        console.log('send event click');
        this._socket.emit('note-click', { soundUri: soundUri })
    }
}

export class Note{
    color: string
    soundUri: string
    constructor(color: string, soundUri: string){
        this.color = color;
        this.soundUri = soundUri;
    }
}