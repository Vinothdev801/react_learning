import Accounts from '../Data/Data';
import { List } from './List.js';

export const BankAccounts = () => {
    return (
        <div className='bank-container'>
            <div id='header'>
                List of Banks and its Details
            </div>
            <ul className='bankList'>
                {
                    Accounts.map( (acc: {id: any; name: any; accountNo: any; balance: any; }) =>
                        <li key={acc.id}>
                            <List name={acc.name} accountNo={acc.accountNo} balance={acc.balance} />
                        </li>

                    )
                }
            </ul>
        </div>
    );
}