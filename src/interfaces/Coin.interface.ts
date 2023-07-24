export interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

export interface RouteParams {
    coinId: string;
}
export interface RouteState {
    name: string;
}
interface ITag{
    coin_counter: number;
    ico_counter:  number;
    id: string;
    name: string;
}
interface ITeam{
    id: string;
    name:  string;
    position: string;
}
interface ILinksExtended{
    type: string;
    url:  string;
}
export interface InfoData {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
    ogo: string,
    tags: ITag[],
    team: ITeam[],
    description: string,
    message: string,
    open_source: boolean,
    started_at: string,
    development_status: string,
    hardware_wallet: boolean,
    proof_type: string,
    org_structure: string,
    hash_algorithm: string,
    links_extended: ILinksExtended[],
    first_data_at: string,
    last_data_at: string
}
export interface PriceData {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    beta_value: number,
    first_data_at: Date,
    last_updated: string,
    quotes: {
        USD: {
            price: number,
            volume_24h: number,
            volume_24h_change_24h: number,
            market_cap: number,
            market_cap_change_24h: number,
            percent_change_15m: number,
            percent_change_30m: number,
            percent_change_1h: number,
            percent_change_6h: number,
            percent_change_12h: number,
            percent_change_24h: number,
            percent_change_7d: number,
            percent_change_30d: number,
            percent_change_1y: number,
            ath_price: number,
            ath_date: string,
            percent_from_price_ath: number,
        }
    }
}