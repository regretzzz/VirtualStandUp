
import { UserDTO } from './userDTO.model';
import { StandUpDTO } from './standupDTO.model';

export interface UpdateCardDTO {
    user: UserDTO;
    standUp: StandUpDTO;
}