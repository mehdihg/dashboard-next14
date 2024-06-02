import Image from "next/image"

const Transactions=()=>{
    return(
        <div className="transaction-container">
            <h2 className="transaction-title">Latest Transactions</h2>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Data</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Image src={'./noavatar.png'} width={40} height={40}  className="transaction-user-image" alt=""/>
                            John Doe
                        </td>
                        <td>
                            <span className='transaction-status transaction-pending'>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>

                    <tr>
                        <td>
                            <Image src={'./noavatar.png'} width={40} height={40}  className="transaction-user-image" alt=""/>
                            John Doe
                        </td>
                        <td>
                            <span className='transaction-status transaction-pending'>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>

                    <tr>
                        <td>
                            <Image src={'./noavatar.png'} width={40} height={40}  className="transaction-user-image" alt=""/>
                            John Doe
                        </td>
                        <td>
                            <span className='transaction-status transaction-pending'>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>


                    <tr>
                        <td>
                            <Image src={'./noavatar.png'} width={40} height={40}  className="transaction-user-image" alt=""/>
                            John Doe
                        </td>
                        <td>
                            <span className='transaction-status transaction-pending'>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Transactions