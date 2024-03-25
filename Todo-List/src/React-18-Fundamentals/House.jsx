import houseImg from  "../assets/house_unsplash.jpg"
import currencyFormatter from "./currencyFormatter";

export default function House({ house }) {
    return (
        <div className="row mt-3">
            <div className="col-6">
                <img src={houseImg} className="img-fluid" alt="house-photo" />
            </div>
            <div className="col-6 flex-column ml-2">
                <h5>{house.country}</h5>
                <h3>{house.address}</h3>
                <h2>{currencyFormatter.format(house.price)}</h2>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt debitis voluptatem odio veritatis.
                    Nihil placeat doloribus assumenda. Earum amet saepe, tenetur nisi vitae error doloremque temporibus aut molestiae at.
                </div>
            </div>
        </div>
    )
}