
export class user {
    _id?: string;
    name: string;
    connections: string[];

    constructor(   id: string,  name: string,  connections: string[]) 
        {
            this._id=id;
            this.name=name;
            this.connections =connections;

        }
  }