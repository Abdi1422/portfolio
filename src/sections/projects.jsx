import './projects.scss'
import Website from '../components/website'
import img1 from '../images/gym.png'
import img2 from '../images/anime.png'
import img3 from '../images/travel.png'
import img4 from '../images/footnewpic.png'



const Projects=()=>{
    const gymtext = "Choose a bodypart and see which exerises to use"
    const animetext ="search which anime you want to watch using anime api"
    const traveltext ="Type which country you want to get information from"
    const hometext="Showcase of football tables and players"

    return(
        <section className='prosection'id='projects'>
            <div className='prodiv'>
               <h1 className='mypro'>My projects</h1>
            </div>
            <div className='webcontainer'>
                <div className='webwrapper1'>
                    <Website view={'https://abdi1422.github.io/test/'} name="Footnews" lang={"Typesript / React / Scss"} source="https://github.com/Abdi1422/test" img={img4} text={hometext}/>  
                    <Website view={'https://clinical1.github.io/limitfitness/'} name="Limitfitness" lang={"React / Scss / Mui"} source="https://github.com/Clinical1/limitfitness" img={img1} text={gymtext}/>
                </div>
                <div className='webwrapper2'>
                    <Website view={'https://clinical1.github.io/Animesfree/'} name="Animesfree" lang={"React / Scss "} source="https://github.com/Clinical1/Animesfree" img={img2} text={animetext}/>
                    <Website view={' https://clinical1.github.io/Travels/'} name="Travels" lang={"React / Scss "} source="https://github.com/Clinical1/Travels" img={img3} text={traveltext}/>  
                </div>
            </div>
        </section>
    )
}
export default Projects