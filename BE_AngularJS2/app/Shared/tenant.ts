import { IBranch } from './branch'

export interface ITenant {
    TenantID: number;
    TenantName: string;
    BranchDetails: IBranch
    RoomNumber: string;
    Email: string;
    PhoneNo: string;
    DOB: Date;
    DOJ: Date;
    PaymentDate: Date;
    MonthofPayment: string;
    MonthlyRent: number;
}