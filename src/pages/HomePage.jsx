import { Footer } from "../composants/Footer/Footer";
import { Formation } from "../composants/Formation/Formation";
import { Header } from "../composants/Header/Header";
import { Nav } from "../composants/Nav/Nav";
import { Projects } from "../composants/Projects/Projects";
import { Skills } from "../composants/Skills/Skills";
import '../pages/HomePage.css'
export function HomePage(){
    return(
        <>
       
        <Header />
        <main className="main">
            <Nav />
            <Projects />
            <Formation />
            <Skills />
        </main>
        <Footer />
        </>
    )
}