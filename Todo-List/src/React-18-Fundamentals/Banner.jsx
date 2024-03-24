import "./Banner.css"
export default function Banner() {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img  className="logo" src="https://github.com/RolandGuijt/ps-react-fundamentals/blob/Anatomy/public/GloboLogo.png?raw=true" alt="" />
            </div>
            <div className="col-7 mt-5" style={{color: "coral", fontStyle: "italic", fontSize: "x-large"}}>
                Providing houses all over the world
            </div>
        </header>
    )
}