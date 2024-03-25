import houseImg from  "../assets/house_unsplash.jpg"

export default function House({ house }) {
    return (
        <div className="row">
            <div className="col-6">
                <img src={houseImg} className="img-fluid" alt="house-photo" />
            </div>
            <div className="col-6 flex-column">
                <h5>Country</h5>
                <h3>Address</h3>
                <h2>Price</h2>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt debitis voluptatem odio veritatis.
                    Nihil placeat doloribus assumenda. Earum amet saepe, tenetur nisi vitae error doloremque temporibus aut molestiae at.
                </div>
            </div>
        </div>
    )
}