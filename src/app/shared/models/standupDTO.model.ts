import { Meeting } from './meeting.model';
import { TeamMember } from './teammember.model';

export interface StandUpDTO {
    yesterday: string;
    blockers: string;
    today: string;
    meeting: Meeting;
    member: TeamMember;
}
