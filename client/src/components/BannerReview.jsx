export const BannerReview = () => {
    return <div>
        <div className={'container_banner_review'}>
            <ul className={'list_banner_review'}>
                <li className={'item_banner_review'}>
                    <i className="fa-solid fa-cloud-arrow-down"></i>
                    <div className={'container_content_banner_review'}>
                        <h3>Ultra rapide</h3>
                        <p>Téléchargement instantané</p>
                    </div>
                </li>
                <div className={'separator_banner_review'}></div>
                <li className={'item_banner_review'}>
                    <i className="fa-solid fa-shield"></i>
                    <div className={'container_content_banner_review'}>
                        <h3>Fiable et sûr</h3>
                        <p>Plus de 10,000 jeux</p>
                    </div>
                </li>
                <div className={'separator_banner_review'}></div>
                <li className={'item_banner_review'}>
                    <i className="fa-regular fa-comments"></i>
                    <div className={'container_content_banner_review'}>
                        <h3>Service client</h3>
                        <p>Conseillers disponibles 24/7</p>
                    </div>
                </li>
                <div className={'separator_banner_review'}></div>
                <li className={'item_banner_review'}>
                    <div className={'banner_review_trust'}>
                        <i className="fa-solid fa-star trust_star"></i>
                        <div className={'space_trust_banner'}>
                            <div className={'container_star_trustpilot'}>
                                <span>Trustpilot</span>
                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star-half-stroke"></i>
                                </div>
                            </div>
                            <p>Noté 4.8 sur 5, basé sur 585,689 avis</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>;
};

export default BannerReview;