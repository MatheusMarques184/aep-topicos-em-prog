 lines (11 sloc)  244 Bytes

import { ObjectId } from "mongoose"

export interface UserInterface extends Document{
    email: String,
    firstName: String,
    lastName: String
}


export interface UserType{
    email: String,
    firstName: String,
    l
