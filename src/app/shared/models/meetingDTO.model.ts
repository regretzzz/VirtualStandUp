import { StandUpDTO } from './standupDTO.model';
import { UpdateCardDTO } from './updatecardDTO.model';

export interface MeetingDTO {
  meetingSubject: string;
  meetingDescription: string;
  cards: Array<UpdateCardDTO>;
}
