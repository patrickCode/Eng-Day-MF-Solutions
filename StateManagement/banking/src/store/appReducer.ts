import { IAction, createStore } from './customStore';
import { IBankingState, IAccountState } from './state';

const defaultState: IBankingState = {
	accounts: [
		{
			number: 'BRDG7172744',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: null,
			balance: 15000
		},
		{
			number: 'BROL192898',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: 'Himanshu Gupta',
			balance: 45000
		},
		{
			number: 'BRAA107829',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: 'Rohit K',
			balance: 500000
		},
		{
			number: 'BRFE67218226',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: 'Pratik Golcha',
			balance: 12000
		}
	]
};

const appReducer = (state: IBankingState = defaultState, action: IAction): IBankingState => {
	switch (action.type) {
		case 'DEPOSIT':
			return {
				accounts: state.accounts.map((account) => {
					if (account.number === action.payload.accountNumber) {
						return {
							...account,
							balance: account.balance + action.payload.amount
						};
					} else {
						return account;
					}
				})
			};
		case 'WITHDRAW': {
			return {
				accounts: state.accounts.map((account) => {
					if (account.number === action.payload.accountNumber) {
						return {
							...account,
							balance: account.balance - action.payload.amount
						};
					} else {
						return account;
					}
				})
			};
		}
	}
	return state;
};

const accountReducer = (state: IAccountState, action: IAction): IAccountState => {
	switch (action.type) {
		case 'DEPOSIT':
			if (action.payload.accountNumber === state.number)
				return {
					...state,
					balance: state.balance + action.payload.amount
				};
			else return state;
		case 'WITHDRAW':
			if (action.payload.accountNumber === state.number)
				return {
					...state,
					balance: state.balance - action.payload.amount
				};
			else return state;
	}
};

export const BankingStore = createStore(appReducer);