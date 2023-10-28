import { Schema, model } from "mongoose";
export interface Organization {
    id: string;
    name: string;
    country: string;
    uic: string;
    vat: string;
    address: string;
    mol: string;
    bankAccount: string;
    teams: string[];
    employees: string[];
    tags: string[];
}
// id is a default member of this schema not id but _id - we will convert id to _id we will use virtuals=true
export const OrganizationSchema = new Schema<Organization>(
    {
        name: { type: String, required: true },
        country: { type: String, required: true },
        uic: { type: String, required: true },
        vat: { type: String },
        address: { type: String },
        mol: { type: String, required: true },
        bankAccount: { type: String, required: true },
        teams: { type: [String] },
        employees: { type: [String] },
        tags: { type: [String] },
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
);

export const OrganizationModel = model<Organization>('organization', OrganizationSchema);