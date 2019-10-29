import { Team } from './team.model'
import { User } from './user.model';
export class TeamMember{
    constructor(public id: number, public team: Team, public user: User, public role: string){}
}