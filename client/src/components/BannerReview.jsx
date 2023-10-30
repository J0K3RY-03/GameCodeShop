export const BannerReview = () => {
  return (
    <section className={"container_banner_review"}>
      <ul className={"list_banner_review"}>
        <li className={"item_banner_review"}>
          <i className="fa-solid fa-cloud-arrow-down"></i>
          <article className={"container_content_banner_review"}>
            <h3>Ultra fast</h3>
            <p>Download instantly</p>
          </article>
        </li>
        <li className={"item_banner_review"}>
          <i className="fa-solid fa-shield"></i>
          <article className={"container_content_banner_review"}>
            <h3>Reliable and safe</h3>
            <p>More than 10,000 games</p>
          </article>
        </li>
        <li className={"item_banner_review"}>
          <i className="fa-regular fa-comments"></i>
          <article className={"container_content_banner_review"}>
            <h3>Customer service</h3>
            <p>Chat support 24/7</p>
          </article>
        </li>
        <li className={"item_banner_review"}>
          <section className={"banner_review_trust"}>
            <i className="fa-solid fa-star trust_star"></i>
            <article className={"space_trust_banner"}>
              <div className={"container_star_trustpilot"}>
                <span>Trustpilot</span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star-half-stroke"></i>
              </div>
              <p>Rated 4.8 out of 5, based on 585,689 reviews</p>
            </article>
          </section>
        </li>
      </ul>
    </section>
  );
};

export default BannerReview;
