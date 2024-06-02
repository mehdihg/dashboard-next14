import Card from "../_components/dashboard/card/card";
import Chart from "../_components/chart/chart";
import Rightbar from "../_components/rightbar/rightbar";
import Transactions from "../_components/transactions/transactions";

export default async function Dashboard(){
    return(
        <div className="dashboard-container">
            <div className="dashboard-main">
                <div  className="dashboard-cards">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transactions/>
                <Chart/>
            </div>
            <div  className="dashboard-rightbar">
                <Rightbar/>
            </div>
        </div>
    )
}