import { Organization } from "./app/shared/models/Organization";

export const sample_organizations: Organization[] = [
    {
        id: '1',
        name: 'SoftUni',
        country: 'Bulgaria',
        uic: '123123123',
        vat: 'BG123123123',
        address: 'Sofia, Raiko Aleksiev 20A',
        mol: 'Svetlin Nakov',
        teams: ['Frontend', 'Backend', 'Sequrity'],
        employees: ['Svetlin Nakov', 'Ivanka Ivanova', 'Petia Petrova']
    },
    {
        id: '2',
        name: 'Fakturico',
        country: 'Bulgaria',
        uic: '123123666',
        vat: 'BG123123666',
        address: 'Sofia, Ivan Geshev 20A',
        mol: 'Martin Marinov',
        teams: ['QA', 'Backend', 'Sequrity'],
        employees: ['Martin Marinov', 'Ivancho Ivanov', 'Petar Petrov']
    },
    {
        id: '3',
        name: 'SomeCoolCompany',
        country: 'Germany',
        uic: '123123777',
        vat: '',
        address: 'Berlin, SomeCoolStreet 20AG',
        mol: 'John Bouvi',
        teams: ['Frontend', 'Backend', 'QA'],
        employees: ['John Bouvi', 'Ivan Ivanonkovich', 'Peter Petrov']
    },

]