const StockComposant = () => {
    return(
        <ul className={'container_content_stock_buy_page'}>
            <li><i className="fa-solid fa-xmark"></i><span>Pas en stock</span></li>
            <div className={'separator_stock_game_page'}></div>
            <li><i className="fa-solid fa-check"></i><span>Téléchargement digital</span></li>
        </ul>
    )
}

export default StockComposant;