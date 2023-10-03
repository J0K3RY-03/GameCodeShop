const Cart = () => {
    return (
        <>
        <header className={'header_cart'}>
            <div>
                <a href="#">GameCodeShop</a>
            </div>
            <div className={'container_cart_step'}>
                <span className={'sub_container_cart_step'}>
                    <span className={'cart_number_step circle_step'}>1</span>
                    <span className={'cart_title_step'}>Panier</span>
                    <span className={'cart_step_separator'}></span>
                </span>
                <span className={'sub_container_cart_step'}>
                    <span className={'cart_number_step circle_step'}>2</span>
                    <span className={'cart_title_step'}>Paiement</span>
                    <span className={'cart_step_separator'}></span>
                </span>
                <span className={'sub_container_cart_step'}>
                    <span className={'cart_number_step circle_step'}>3</span>
                    <span className={'cart_title_step'}>Activation du jeu</span>
                </span>
            </div>
            <div className={'container_cart_securised_paiement'}>
                <div className={'container_cart_lock'}>
                    <i className="fa-solid fa-lock"></i>
                    <div className={'cart_separator_securised_paiement'}></div>
                </div>
                <div className={'cart_text_securised_paiement'}>
                    <p className={'first_text_cart_secured_paiement'}>Paiement Sécurisé</p>
                    <p className={'second_text_cart_secured_paiement'}>256-bit SSL Secured</p>
                </div>
            </div>
        </header>

        <section className={'container_section_cart'}>
            <div className={'container_cart_resume'}>
                <div className={'cart_section'}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <h3>Votre panier est vide</h3>
                    <p>Vous n'avez pas encore ajouté de jeux dans votre panier. Parcourez le site pour trouver des offres incroyables !</p>
                    <button>Découvrir des jeux</button>
                </div>

                <div className={'cart_section_resume'}>
                   <div className={'cart_container_officiel_price'}>
                       <span>Prix officiel</span>
                       <span>0€</span>
                   </div>
                    <div className={'cart_container_reduct_price'}>
                        <span>Réduction</span>
                        <span>0€</span>
                    </div>
                    <div className={'cart_container_total_price'}>
                        <span>Sous-total</span>
                        <span>0€</span>
                    </div>
                    <button>Aller au paiement</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Cart;