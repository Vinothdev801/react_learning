export const List = ({name, accountNo, balance}: any) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Account Number: {accountNo}</p>
            <p>Avaliable Balance: {balance}</p>
        </div>
    );
}