import './styles.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BankingStore } from './store/appReducer';
import { AccountList } from './accounts/account.list';

export class Accounts extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        const accounts = BankingStore.getState().accounts;
        return (
                <AccountList accounts={accounts}/>
        )
    }
}

const mountAccounts = (elementId: string) => {
    const renderElement = document.getElementById(elementId);
    ReactDOM.render(<Accounts />, renderElement);
}

const unmountAccounts = (elementId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
}

window["mountAccounts"] = mountAccounts;
window["unmountAccounts"] = unmountAccounts;

if (!(window["banking-portal-context"])) {
    BankingStore.subscribe(() => {
        mountAccounts("app");
    });
    mountAccounts("app");
}
