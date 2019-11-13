import { StandUp } from './standup.model';
export interface TeamMember{
    id: string;
    role: string;
    comments: Set<StandUp>;
    
}