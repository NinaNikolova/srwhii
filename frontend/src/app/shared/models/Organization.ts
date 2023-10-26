export class Organization {
    id!: string;
    name!: string;
    country!: string;
    uic!: string;
    vat?: string;
    address?: string;
    mol!: string;
    bankAccount!: string;
    teams?: string[];
    employees?: string[];
    tags?: string[];

}