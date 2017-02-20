import { IBranch } from '../SharedEntities/branch'

export interface ITenant {
    TenantID: number;
    TenantName: string;
    BranchDetails: IBranch
    RoomNumber: string;
    DOB: Date;
    DOJ: Date;
    DOE: string;
    PaymentDate: Date;
    MonthofPayment: string;
    MonthlyRent: number;
    Name: string;
    Email: string;
    PhoneNo: string;
    LoginPassword: string;
}