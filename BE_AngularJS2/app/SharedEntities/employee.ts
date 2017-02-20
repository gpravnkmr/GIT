import { IBranch } from '../SharedEntities/branch'

export interface IEmployee {
    EmployeeID: number;
    EmployeeName: string;
    EmployeeEmail: string;
    EmployeePhoneNumber: string;
    EmployeeDOB: Date
    EmployeeSalary: number;
    EmployeeStatus: string;
    BranchDetails: IBranch
}