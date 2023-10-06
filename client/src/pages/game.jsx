import {useEffect, useState} from "react";
import header from "../components/Header.jsx";

const Game = () => {
    const [dataGame, setDataGame] = useState([]);
    const [dataCover, setDataCover] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/getdocgame`)
            .then((res) => res.json())
            .then((gameNameData) => {
                console.log(gameNameData, 'data name');

                const gamePromises = gameNameData.map((gameName) => {
                    const dbGameName = gameName.name;
                    const encodedGameName = encodeURIComponent(dbGameName);

                    return fetch(`http://localhost:3000/api/getgame/${encodedGameName}`)
                        .then((response) => response.json())
                        .then((data) => {
                            const gameIds = data.map((game) => game.id);
                            const validGameCover = gameIds.filter((gameId) => gameId !== undefined);

                            const coverRequests = validGameCover.map((gameCoverId) =>
                                fetch(`http://localhost:3000/api/getcover/${gameCoverId}`)
                                    .then((res) => res.json())
                            );

                            return Promise.all(coverRequests)
                                .then((coverData) => {
                                    return { gameData: data, coverData };
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
                        console.log(allCoverData, 'ALL COVER DTA')

                        setDataGame(allGameData);
                        setDataCover(allCoverData);
                    })
                    .catch((error) => {
                        console.error("Erreur lors de la récupération des données de jeu", error);
                    });
            });
    }, []);
    console.log(dataCover, 'datacover')

    return (
        <div>
            <ul style={{ color: 'white' }}>
                {dataGame.map((item, index) => (
                    <li key={index}>
                        <h3>{item.name}</h3>
                        <div>
                            <img src={dataCover[index]?.[0]?.url} alt={item.name} />
                        </div>
                        <p></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default Game;