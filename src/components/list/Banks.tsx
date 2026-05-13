import { useEffect, useState } from 'react';
import Accounts from '../Data/Data';
import { List } from './List.js';
import { getApi } from '../API/LocalAPI.js';


export const BankAccounts = ({img, children}: any) => {

    const [index, setIndex] = useState(0);
    const [showAll, setShowAll] = useState(false);
    const [account, setAccount] = useState("");
    const [right, setRight] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() =>{
        getApi("banks")
        .then(data => setAccount(data))
        .catch(err => setError(err))
    }, [])

    let acc = Accounts[index];
    return (
        <div className='bank-container'>
            <div id='header'>
                List of Banks and its Details
            </div>
            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <button type='button' className='btn btn-primary' disabled={showAll} onClick={handleBtnClick}>{right ? "Next" : "Prev"}</button>&nbsp;
                <button type="button" className='btn btn-primary' onClick={() => setShowAll(!showAll)}>{showAll ? "Show one" : "Show all"}</button>
            </div>
            {/* <button onClick={() => handleCardClick(acc.name)}> */}
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
            {/* </button> */}
            
            <div>
                <hr />
                {children}
            </div>

            <hr />
            {
                account ? 
                <div>
                    <h3>Data received from the API</h3>
                    <div>
                        <pre>
                            {JSON.stringify(account, null, 2)}
                        </pre>
                    </div>
                </div>
                :
                <div>
                    <h3><b>Error response from Api:</b></h3>
                    <div>
                        <pre>
                            {error}
                        </pre>
                    </div>
                </div>
            }
            
        </div>
    );

    function handleBtnClick() {
        const nextIndex = index < Accounts.length - 1 && right ? index + 1 : index - 1;

        setIndex(nextIndex);
        setRight(nextIndex === 0 ? true : (nextIndex === Accounts.length - 1 ? false : right));
    }

}

function handleCardClick(name: any) {
    // console.log(`Hovered ${name} ...`)
    confirm(`clicked ${name} ...`)
}

