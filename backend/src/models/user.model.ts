import { Schema, model } from "mongoose";
export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    address: string;
}
export const UserSchema = new Schema<User>({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    }

});

export const UserModel = model<User>('user', UserSchema);