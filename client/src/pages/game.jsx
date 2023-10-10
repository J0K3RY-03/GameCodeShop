import { useEffect, useState } from "react";
import header from "../components/Header.jsx";
import BannerReview from "../components/BannerReview.jsx";

const Game = () => {
    const [dataGame, setDataGame] = useState([]);
    const [dataCover, setDataCover] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/getdocgame`)
            .then((res) => res.json())
            .then((gameNameData) => {
                console.log(gameNameData, 'LES DATAS IL FAUT')
                const gamePromises = gameNameData.map((gameName) => {
                    const dbGameName = gameName.name;
                    const encodedGameName = encodeURIComponent(dbGameName);

                    return fetch(`http://localhost:3000/api/getgame/${encodedGameName}`)
                        .then((response) => response.json())
                        .then((data) => {
                            console.log(data, 'big datataa')
                            const gameIds = data.map((game) => game.id);
                            const validGameCover = gameIds.filter((gameId) => gameId !== undefined);

                            const coverRequests = validGameCover.map((gameCoverId) =>
                                fetch(`http://localhost:3000/api/getcover/${gameCoverId}`).then((res) => res.json())
                            );

                            // Ajouter _id et price de gameName à chaque objet de data
                            const dataWithIdAndPrice = data.map((game) => ({
                                ...game,
                                _id: gameName._id,
                                price: gameName.price,
                            }));

                            return Promise.all(coverRequests).then((coverData) => {
                                return { gameData: dataWithIdAndPrice, coverData };
                            });
                        })
                        .catch((error) => {
                            console.error("Erreur lors de la récupération des jeux", error);
                            return { gameData: [], coverData: [] };
                        });
                });

                Promise.all(gamePromises)
                    .then((results) => {
                        const allGameData = results.flatMap((result) => result.gameData);
                        const allCoverData = results.flatMap((result) => result.coverData);

                        setDataGame(allGameData);
                        setDataCover(allCoverData);
                    })
                    .catch((error) => {
                        console.error("Erreur lors de la récupération des données de jeu", error);
                    });
            });
    }, []);

    const allPossiblePaths = ['t_thumb', 't_cover_small', 't_screenshot_med', 't_logo_med', 't_screenshot_huge', 't_micro', 't_720p', 't_1080p'];

    return (
        <>
            <div className={"section_game_homepage"}>
                <h2>Liste des jeux</h2>
                <ul className={"container_card_game_homepage"} style={{ color: "white" }}>
                    {dataGame.map((item, index) => {
                        if (item.category === 0) {
                            const originalUrl = dataCover[index]?.[0]?.url;
                            let modifiedUrl = originalUrl;

                            allPossiblePaths.forEach(path => {
                                if (originalUrl && originalUrl.includes(path)) {
                                    modifiedUrl = modifiedUrl.replace(path, 't_cover_big');
                                }
                            });

                            return (
                                <li className={"card_game_item_homepage"} key={item._id}>
                                    <div className={"container_card_game_img_homepage"}>
                                        <img src={modifiedUrl} alt={item.name} />
                                    </div>
                                    <div className={'container_name_price_game_home'}>
                                        <h3>{item.name}</h3>
                                        <p>{item.price}€</p>
                                    </div>
                                </li>
                            );
                        }
                        return null;
                    })}
                </ul>
            </div>
            <BannerReview/>
        </>
    );
};

export default Game;
