
import Banner from "../Banner/Banner.jsx"
import MainContent from "../MainContent/MainContent.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import Proximamente from "../Proximamente/Proximamente.jsx";
import Galeria from "../Galeria/Galeria.jsx";
import Otros from "../Otros/Otros.jsx";
import Marquee from "../Marquee/Marquee.jsx";
export default function Home (){

    return(
        <>
          <Banner/>
          <MainContent/>
          <ItemList/>
            <Marquee/>
          <Proximamente/>
            <Otros/>
            <Galeria/>
        </>
    )

}