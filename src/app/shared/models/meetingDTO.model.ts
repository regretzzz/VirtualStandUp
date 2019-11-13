import { StandUpDTO } from './standupDTO.model';
import { UpdateCardDTO} from './updatecardDTO.model';

export interface MeetingDTO {
    meetingSubject: String;
    meetingDescription: String;
    cards: Array<UpdateCardDTO>;
}