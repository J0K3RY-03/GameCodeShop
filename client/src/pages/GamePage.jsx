import StockComposant from "../components/StockComposant";
const GamePage = () => {
    return(
        <main className={'container_main_game_page'}>
            <section className={'section_game_page'}>
                <div className={'container_img_game_page'}>
                    <img src="../../public/assets/img_game_page.jpg" alt="image game"/>
                </div>
                <article className={'container_content_buy_game_page'}>
                    <h2>EA SPORTS FC 24</h2>
                    <StockComposant/>
                    <span className={'price_content_buy_game_page'}>48.99€</span>
                    <div className={'container_button_buy_game_page'}>
                        <a href="#" className={'cart_buy_game_page'}><i className="fa-solid fa-cart-shopping"></i></a>
                        <a href="#" className={'buy_game_page'}>Acheter maintenant</a>
                    </div>
                </article>
                <article className={'container_about_game_page'}>
                    <h2>A propos du jeu</h2>
                    <p>EA Sports FC 24 pour PC est un jeu de simulation de football, successeur des jeux FIFA, suite à la fin du partenariat avec la fédération internationale de football. Il s'agit donc du premier jeu de la série, mais est en réalité le 31e jeu de la série. Malgré le changement de nom, la société a déclaré dans son communiqué que la franchise rebrandée garderait ses licences de plus de 19 000 joueurs, plus de 700 équipes, 100 stades, et plus de 30 langues - toutes basées sur de ré..</p>
                    <span>Tags utilisateurs:</span>
                </article>
                <div className={'container_game_info_game_page'}>
                    <div className={'content_game_info'}>
                        <p className={'content_left_game_info_buy_page'}>Installation:</p>
                        <p>	Comment activer ce jeu</p>
                    </div>
                    <div className={'content_game_info'}>
                        <p className={'content_left_game_info_buy_page'}>Développeur:</p>
                        <p>Electronic Arts</p>
                    </div>
                    <div className={'content_game_info'}>
                        <p className={'content_left_game_info_buy_page'}>Editeur:</p>
                        <p>Electronic Arts</p>
                    </div>
                    <div className={'content_game_info'}>
                        <p className={'content_left_game_info_buy_page'}>Date de sortie:</p>
                        <p>29 septembre 2023</p>
                    </div>
                    <div className={'content_game_info'}>
                        <p className={'content_left_game_info_buy_page'}>Genre:</p>
                        <p>Jeux solo</p>
                    </div>
                    <div className={'content_game_info'}>
                        <p className={'content_left_game_info_buy_page'}>Toutes les notes steam:</p>
                        <p>Moyennes (6749)</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GamePage;