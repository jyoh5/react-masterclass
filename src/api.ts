const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then(res => res.json());
}
export async function fetchCoin(coinId: string) {
    return fetch(`${BASE_URL}/coins/${coinId}`).then(res => res.json());
}
export async function fetchPrice(coinId: string) {
    return fetch(`${BASE_URL}/tickers/${coinId}`).then(res => res.json());
}