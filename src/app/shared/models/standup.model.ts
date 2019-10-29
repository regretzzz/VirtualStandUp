export class StandUp{
    constructor(public id: number, public uid: number,
                public yesterday: string,
                public today: string, 
                public blockers: string, 
                public  name){}
}