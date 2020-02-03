import { IAction } from './customStore';

export const Deposit = (accountNumber: string, amount: number): IAction => ({
    type: 'DEPOSIT',
    payload: {
        accountNumber: accountNumber,
        amount: amount
    }
});