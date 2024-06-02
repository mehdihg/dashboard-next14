import { MdSupervisedUserCircle } from "react-icons/md";
const Card = ()=>{
    return(
        <div className="card-container">
            <MdSupervisedUserCircle size={24} />
            <div className="card-texts">
                <span className="card-title">Total Users</span>
                <span className="card-number">10.273</span>
                <span className="card-detail">
                    <span className="positive">12%</span>
                    More than previous week
                </span>
            </div>
        </div>
    )
}
export default Card;