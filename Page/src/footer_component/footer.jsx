import utadlogo from '../assets/utadLogo2.png'
import decorations1 from '../assets/decorations1.png'
import "./footer.css"

function Footer(){
    return (
        <div className="Footer">
            <div class="credits_container">
                <h2 className="footerheader">WildLeaf</h2>
                <p>Project made in U-tad</p>
                <ul className="footerList">
                    <li className="footerItem">Contact</li>
                    <li className="footerItem">About us</li>
                    <li className="footerItem">Collaborators</li>
                </ul>
                <p>Made by: Samuel Porta, Guillermo Sabate, Emilie Dubief and Diego Herrera </p>
                <img src={utadlogo} className="footerlogo"></img>
                <img src={decorations1} className="footerdecorations"></img>
            </div>
            <div id='references_container'>
                <h2>References</h2>
                <p>Research</p>
                <ul>
                    <li><a href="https://fr.wikipedia.org/wiki/Liste_rouge_des_plantes_en_Espagne" target='_blank'>List of endangered plants in Spain</a></li>
                    <li><a href="https://bmcecolevol.biomedcentral.com/articles/10.1186/s12862-023-02115-z" target='_blank'>Abstract about the plants disapearance</a></li>
                    <li><a href="https://www.greenpeace.org.uk/challenges/wildlife-and-biodiversity/climate-change-biodiversity/" target='_blank'>GreenPeace article about the impact of plants disapearance</a></li>
                    <li><a href="https://www.rjb.csic.es/especiesamenazadas/the-project-context.php" target='_blank'>Cero Project</a></li>
                    <li><a href="https://www.miteco.gob.es/es/biodiversidad/temas/conservacion-de-especies/especies-proteccion-especial/ce-proteccion-listado-situacion.html" target='_blank'>Conservation of species in Spain</a></li>
                    <li><a href="https://www.futura-sciences.com/planete/actualites/flore-biodiversite-taux-extinction-plantes-alarmant-62774/" target='_blank'>Disapearance rate</a></li>
                </ul>
                <p>Data retrieval</p>
                <ul>
                    <li><a href="https://www.gbif.org/" target='_blank'>GBIF API</a></li>
                    <li><a href="https://www.inaturalist.org/" target='_blank'>iNaturalist API</a></li>
                    <li><a href="https://www.wikidata.org/wiki/Wikidata:Main_Page" target='_blank'>Wikidata API</a></li>
                    <li><a href="https://leafletjs.com/" target='_blank'>Leaflet</a></li>
                    <li><a href="https://simplemaps.com/gis/country/es?utm_source=chatgpt.com" target='_blank'>Data for the map</a></li>
                </ul>
            </div>
        </div>
    );
}
export default Footer