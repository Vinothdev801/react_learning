import { useEffect, useMemo, useRef, useState } from 'react';
import AccountsData from '../Data/Data';
import { List } from './List.js';
import { getApi } from '../API/LocalAPI.js';
import searchIcon from '../../assets/icons/search.svg'



 

export const BankAccounts = ({img, children}: any) => {
    

    const [index, setIndex] = useState(0);
    const [account, setAccount] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [right, setRight] = useState(true);
    const [error, setError] = useState();
    const searchRef = useRef<HTMLInputElement>(null);

    const [searched, setSearched] = useState('');

    let Accounts = useMemo(() => {
        if(!showAll) return AccountsData;

        return AccountsData.filter(acc => acc.name ? acc.name.toLowerCase().includes(searched.toLowerCase().trim()) : false)
    }, [searched, showAll]);
    
    
    useEffect(() =>{
        sample()
        // getApi("banks")
        // .then(data => setAccount(data))
        // .catch(err => setError(err))
    }, [])

    async function sample() {
        try{
            let data = await getApi("banks");
            console.log(data);
            setAccount(data);
        } catch(err: any) {
            setError(err)
            console.log(err)
        }
    }

    let acc = Accounts[index];
    
    return (
        <div className='bank-container'>
            <div id='header'>
                List of Banks and its Details
            </div>
            <div style={{display: "flex", justifyContent: "center"}} >
                {/* <form hidden={showAll ? false : true} className='input-group mb-3' style={{maxWidth: "400px"}} onSubmit={onSubmit}> */}
                    <input ref={searchRef} 
                           hidden={showAll ? false : true} 
                           type="search" 
                           name="search" 
                           id="searchName" 
                           className='form-control' 
                           style={{maxWidth: "400px", marginBottom: "20px"}} 
                           placeholder='Search with Bank Name' 
                           onChange={handleChange}
                    />
                    {/* <button className='btn' style={{background: "whitesmoke"}}> <img src={searchIcon} alt="Search" style={{ width: '20px', height: '20px', }} /></button>
                </form> */}
            </div>
            <div style={{display: "flex", justifyContent: "center", gap: "5px"}}>
                <button type='button' className='btn btn-primary' disabled={showAll} onClick={handleBtnClick}>{right ? "Next" : "Prev"}</button>&nbsp;
                <button type="button" className='btn btn-primary' onClick={() => setShowAll(!showAll)}>{showAll ? "Show one" : "Show all"}</button>
            </div>
            {/* <button onClick={() => handleCardClick(acc.name)}> */}
                {showAll ?
                    <ul className='bankList'>
                        {
                            Accounts.length !== 0 ?
                                Accounts.map( (acc: {id: any; name: any; accountNo: any; balance: any; }) =>
                                    <li key={acc.id} className='col-12 col-md-4 col-lg-3' /*onMouseOver={ () => handleCardClick(acc.name)}*/ /*style={{background: `url(${img.path})`}}*/>
                                    <List name={acc.name} accountNo={acc.accountNo} balance={acc.balance}  /> 
                                    </li>
                                )
                            :   
                                <li>No Data found.</li>
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

    function onSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        if(searchRef){
            setSearched(searchRef.current?.value ?? "");
        }
    }

    function handleChange(){
        if(searchRef){
            setSearched(searchRef.current?.value ?? "");
        }
    }

}

function handleCardClick(name: any) {
    // console.log(`Hovered ${name} ...`)
    confirm(`clicked ${name} ...`)
}

