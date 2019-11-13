import { StandUp } from './standup.model';

export interface Meeting {
    id: number;
    meetingsubj: string;
    meetingdesc: string;
    meetingstat: string;
    meetingstartdate: Date;
    meetingenddate: Date;
    standups: Set<StandUp>;
}