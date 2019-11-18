import { TeamMember } from './teammember.model';
import { Team } from './team.model';

export interface UserDTO {
    userID: string;

    userName: string;

    name: string;

    email: string;

    teams: Set<TeamMember>;
    listofTeam: Set<Team>;
}
