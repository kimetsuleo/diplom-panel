import {Position} from "./Position";

export interface Employee {
    id: number,
    firstName: string,
    lastName: string,
    patronymic: string,
    position: Position,
    phone: string,
    email: string,
    passport: string,
    birthdate: string,
    active: boolean,
}