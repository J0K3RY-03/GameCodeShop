import {useEffect, useState} from "react";

const ProductSingleGameDetail = (props) => {
    const [activeElement, setActiveElement] = useState(1);
    const [screenshots, setScreenshots] = useState([])
    const [video, setVideo] = useState([])
    const phrases = props.description.split('.');

    const toggleElement = (elementNumber) => {
        // Mettez à jour l'état pour activer l'élément cliqué
        setActiveElement(elementNumber);
    };

    useEffect(() => {
            fetch(`http://localhost:3000/api/getscreenshots/${props.idGame}`)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        console.log(data, "SCREENSHOTS");
                        setScreenshots(data);
                    } else {
                        console.log("gameData est nul");
                    }
                })
                .catch((error) => {
                    console.error('Erreur lors de la récupération des données du jeu :', error);
                });

        fetch(`http://localhost:3000/api/getvideoofgame/${props.idGame}`)
            .then((response) => response.json())
            .then((dataVideo) => {
                if (dataVideo) {
                    console.log(dataVideo, "video");
                    setVideo(dataVideo);
                } else {
                    console.log("video est nul");
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données du jeu :', error);
            });
    }, []);

    const allPossiblePaths = ['t_thumb', 't_cover_small', 't_screenshot_med', 't_logo_med', 't_cover_big', 't_micro', 't_720p', 't_1080p'];

    return(
        <section className={'container_product_singlegame_detail'}>
            <div className={'product_item_singlegame'}>
                <div className={`element ${activeElement === 1 ? "active" : "hidden"}`}
                     onClick={() => toggleElement(1)}>Informations</div>
                <div className={`element ${activeElement === 2 ? "active" : "hidden"}`}
                     onClick={() => toggleElement(2)}>Capture d'écran</div>
                <div className={`element ${activeElement === 3 ? "active" : "hidden"}`}
                     onClick={() => toggleElement(3)}>Vidéo</div>
            </div>
            <div className={'product_item_content'}>
                <div className={`product_content_single product_info_single ${activeElement === 1 ? 'active' : 'hidden'}`}>
                    <h3>Description</h3>
                    {phrases.map((phrase, index) => (
                        <p key={index}>{phrase.trim()}</p>
                    ))}
                </div>
                <div className={`product_content_single product_screenshots_single ${activeElement === 2 ? 'active' : 'hidden'}`}>
                    {screenshots.map((item,index) => {
                        const originalUrl = item.url;

                        let modifiedUrl = originalUrl;

                        allPossiblePaths.forEach(path => {
                            if (originalUrl && originalUrl.includes(path)) {
                                modifiedUrl = modifiedUrl.replace(path, 't_screenshot_huge');
                            }
                        });
                       return (
                           <div key={index}>
                               <img src={modifiedUrl} alt={item.image_id}/>
                           </div>
                       )
                    })}
                </div>
                <div className={`product_content_single product_video_single ${activeElement === 3 ? 'active' : 'hidden'}`}>
                    {video.map((item,index) => {
                        const idUrlVideo = item.video_id;

                        const completeUrlVideo = `https://www.youtube.com/embed/${idUrlVideo}`;
                        
                        return (
                            <div key={index}>
                                <iframe
                                    src={completeUrlVideo}
                                    frameBorder="0"
                                    type="text/html"
                                    width="100%"
                                    height="300"
                                    loading="lazy"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductSingleGameDetail;