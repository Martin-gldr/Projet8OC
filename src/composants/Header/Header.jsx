import banner from "../../assets/banner.webp"
import "../Header/Header.css"
export function Header() {
return (
    <div className="banner">
        <img  className="banner-img" src={banner} alt="background"/>
        <h1 className="banner-title"> Développement WEB  </h1>
    </div>
)
}