
import {Connection} from './connection.model';

export class user {
    _id?: number;
    name: string;
    connections: Connection[];

    constructor(  public id: number,public name: string, public connections: Connection[] 
        {}
  }