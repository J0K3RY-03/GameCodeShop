const Cart = () => {
  return (
    <>
      <header className={"header_cart"}>
        <div>
          <a href="#">GameCodeShop</a>
        </div>
        <div className={"container_cart_step"}>
          <span className={"sub_container_cart_step"}>
            <span className={"cart_number_step circle_step"}>1</span>
            <span className={"cart_title_step"}>Cart</span>
            <span className={"cart_step_separator"}></span>
          </span>
          <span className={"sub_container_cart_step"}>
            <span className={"cart_number_step circle_step"}>2</span>
            <span className={"cart_title_step"}>Payment</span>
            <span className={"cart_step_separator"}></span>
          </span>
          <span className={"sub_container_cart_step"}>
            <span className={"cart_number_step circle_step"}>3</span>
            <span className={"cart_title_step"}>Game activation</span>
          </span>
        </div>
        <div className={"container_cart_securised_paiement"}>
          <div className={"container_cart_lock"}>
            <i className="fa-solid fa-lock"></i>
            <div className={"cart_separator_securised_paiement"}></div>
          </div>
          <div className={"cart_text_securised_paiement"}>
            <p className={"first_text_cart_secured_paiement"}>Secure payment</p>
            <p className={"second_text_cart_secured_paiement"}>
              256-bit SSL Secured
            </p>
          </div>
        </div>
      </header>

      <section className={"container_section_cart"}>
        <div className={"container_cart_resume"}>
          <div className={"cart_section"}>
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>Your cart is empty</h3>
            <p>
              You have not yet added any games to your cart. Browse the site to
              find incredible offers!
            </p>
            <button>Find out our games</button>
          </div>

          <div className={"cart_section_resume"}>
            <div className={"cart_container_officiel_price"}>
              <span>Official price</span>
              <span>0€</span>
            </div>
            <div className={"cart_container_reduct_price"}>
              <span>Discount</span>
              <span>0€</span>
            </div>
            <div className={"cart_container_total_price"}>
              <span>Total</span>
              <span>0€</span>
            </div>
            <button>Go to payment</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
