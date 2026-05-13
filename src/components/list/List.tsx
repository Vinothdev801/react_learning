export const List = ({name, accountNo, balance}: any) => {
    return (
        <div className="card">
            <h3 autoCapitalize="on" /* contentEditable="true" */>{name}</h3>
            <p>Account Number: {accountNo}</p>
            <p>Avaliable Balance: {balance}</p>
        </div>
    );
}