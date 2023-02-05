export interface Portfolio{
    portfolio_id: string;
    portfolio_descricao: string;
    user_id: string;
    items: Array<PortfolioItem>;
}

export interface PortfolioItem{
    item_quantidade: number;
    item_preco: number;
    acoes_id: number;
}
