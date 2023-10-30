import StockComposant from "../components/StockComposant";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import game from "./game.jsx";
import ProductSingleGameDetail from "../components/productSingleGameDetail.jsx";

const GamePage = () => {
    const { id } = useParams();
    const [gameData, setGameData] = useState(null);
    const [gameCover, setGameCover] = useState(null);

    useEffect(() => {
        // Obtenir le chemin d'URL décodé
        const decodedPath = decodeURIComponent(window.location.pathname);

        // Utiliser une expression régulière pour extraire les parties de l'URL
        const match = decodedPath.match(/\/game-page\/(.*?)-([a-f0-9]+)-([a-f0-9]+)/);

        if (match) {
            const gameName = match[1]; // Nom du jeu
            const idGameDb = match[2]; // ID de la base de données du jeu
            const idGameIgdb = match[3]; // ID de la base de données IGDB du jeu

            fetch(`http://localhost:3000/api/getsinglegame/${gameName}?idGameDb=${idGameDb}&idGameIgdb=${idGameIgdb}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        console.log(data, "data");
                        setGameData(data);

                        const gameCover = data.idOfIgdb;
                        console.log(gameCover);
                        fetch(`http://localhost:3000/api/getcover/${gameCover}`)
                            .then((res) => res.json())
                            .then((dataCover) => {
                                console.log(dataCover, "COVERR");
                                setGameCover(dataCover);
                            });
                        // Accédez aux données que vous souhaitez afficher ici
                    } else {
                        console.log("gameData est nul");
                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données du jeu :', error);
                });
        } else {
            console.log("URL invalide");
        }
    }, [id]);

    const allPossiblePaths = ['t_thumb', 't_cover_small', 't_screenshot_med', 't_logo_med', 't_screenshot_huge', 't_micro', 't_720p', 't_1080p'];

    return(
        <main className={'container_main_game_page'}>
            <div className={'container_section_game_page'}>
            <section className={'section_game_page'}>
                {gameCover && gameCover.map((item, index) => {
                    console.log(item, index)
                    const originalUrl = item.url;

                    let modifiedUrl = originalUrl;

                    allPossiblePaths.forEach(path => {
                        if (originalUrl && originalUrl.includes(path)) {
                            modifiedUrl = modifiedUrl.replace(path, 't_cover_big');
                        }
                    });

                    return(
                        <div className={'container_img_game_page'} key={index}>
                            <img src={modifiedUrl} alt={item.name}/>
                        </div>
                    )
                })}
                <article className={'container_content_buy_game_page'}>
                    {gameData && (
                        <h2>{gameData.dataOfGame.name}</h2>
                    )}
                    <StockComposant/>
                    {gameData && (
                        <span className={'price_content_buy_game_page'}>{gameData.dataOfGame.price}€</span>
                    )}
                    <div className={'container_button_buy_game_page'}>
                        <a href="#" className={'cart_buy_game_page'}><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" className={'buy_game_page'}>Buy Now</a>
                    </div>
                </article>
            </section>
            </div>
            {gameData &&
                <ProductSingleGameDetail description = {gameData.allDataOfGameByAPI[0].summary} idGame = {gameData.allDataOfGameByAPI[0].id} />
            }
        </main>
    )
}

export default GamePage;