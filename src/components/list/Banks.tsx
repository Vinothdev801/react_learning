import { useState } from 'react';
import Accounts from '../Data/Data';
import { List } from './List.js';


export const BankAccounts = ({img}: any) => {

    const [index, setIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);

    let acc = Accounts[index];
    return (
        <div className='bank-container'>
            <div id='header'>
                List of Banks and its Details
            </div>
            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <button type='button' className='btn btn-primary' disabled={showAll && true} onClick={() => setIndex((index + 1) % Accounts.length)}>one</button>&nbsp;
                <button type="button" className='btn btn-primary' onClick={() => setShowAll(!showAll)}>{showAll ? "Show one" : "Show all"}</button>
            </div>
            
            {showAll ?
                <ul className='bankList'>
                    {
                        Accounts.map( (acc: {id: any; name: any; accountNo: any; balance: any; }) =>
                            <li key={acc.id} className='col-12 col-md-4 col-lg-3' /*onMouseOver={ () => handleCardClick(acc.name)}*/ /*style={{background: `url(${img.path})`}}*/>
                            <List name={acc.name} accountNo={acc.accountNo} balance={acc.balance}  /> 
                            </li>

                        )
                    }
                </ul>
                :
                <ul className='bankList'>
                    {
                        
                            <li key={acc.id} className='col-12 col-md-4 col-lg-3' /*onMouseOver={ () => handleCardClick(acc.name)}*/ /*style={{background: `url(${img.path})`}}*/>
                            <List name={acc.name} accountNo={acc.accountNo} balance={acc.balance}  /> 
                            </li>

                        
                    }
                </ul>
            }
            {/* <div>
                <hr />
                <img src={img.path} alt={img.name} />
            </div> */}
        </div>
    );
}

function handleCardClick(name: any) {
    // console.log(`Hovered ${name} ...`)
    confirm(`clicked ${name} ...`)
}
