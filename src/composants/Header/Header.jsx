import banner from "../../assets/banner.webp"
import "../Header/Header.css"
export function Header() {
return (
    <div className="banner">
        <img fetchPriority='high' loading="eager" className="banner-img" src={banner} alt="background"/>
        <h1 className="banner-title"> Développement WEB  </h1>
    </div>
)
}