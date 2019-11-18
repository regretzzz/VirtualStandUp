import { TeamMember } from './teammember.model';

export interface User {
    userID: string;
    userName: string;
    name: string;
    email: string;
    teams: Set<TeamMember>;
}
