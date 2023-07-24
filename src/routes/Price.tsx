import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa";
import { PriceData } from "../interfaces/Coin.interface";
import { styled } from "styled-components";

const PlusMinus = styled.span<{isPlus: boolean}>`
    color: ${props => props.isPlus ? "#FF0060" : "#0079FF"};
`;
const Row = styled.div<{marginBottom?: string}>`
    display: flex;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: ${props => props.marginBottom};
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
`;
const CardTitle = styled.div`
    font-size: 12px;
    margin-bottom: 4px;
`;
const CardContentBig = styled.div`
    font-size: 32px;
`;
const CardContentMideum = styled.div`
    font-size: 16px;
`;
const CardContentSmall = styled.div`
    font-size: 12px;
`;



interface IPriceProps{
    priceData?: PriceData;
}

const PlusMinusComponent = (num:number) => {
    return <PlusMinus isPlus={num >= 0}>{num > 0 ? <FaCaretUp /> : (num < 0? <FaCaretDown /> : <FaMinus />)} {num}%</PlusMinus>
}


function Price({ priceData }: IPriceProps) {
    const first_data_at = priceData?.first_data_at ? new Date(priceData?.first_data_at) : new Date();
    const year = first_data_at?.getFullYear();
    let month: string | number = first_data_at?.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let date: string | number = first_data_at?.getDate() + 0;
    date = date < 10 ? `0${date}` : date;
    const price_15m = priceData?.quotes.USD.percent_change_15m || 0;
    // const price_30m = priceData?.quotes.USD.percent_change_30m || 0;
    const price_1h = priceData?.quotes.USD.percent_change_1h || 0;
    // const price_6h = priceData?.quotes.USD.percent_change_6h || 0;
    // const price_12h = priceData?.quotes.USD.percent_change_12h || 0;
    const price_24h = priceData?.quotes.USD.percent_change_24h || 0;
    const price_7d = priceData?.quotes.USD.percent_change_7d || 0;
    const price_30d = priceData?.quotes.USD.percent_change_30d || 0;
    const price_1y = priceData?.quotes.USD.percent_change_1y || 0;
    const volume_24h_change_24h = priceData?.quotes.USD.volume_24h_change_24h || 0;
    const market_cap_change_24h = priceData?.quotes.USD.market_cap_change_24h || 0;
    return (
        <>
            <Row>
                <Card>
                    <CardTitle>Price</CardTitle>
                    <CardContentBig>${priceData?.quotes.USD.price.toFixed(2)}</CardContentBig>
                </Card>
            </Row>
            <Row marginBottom={"12px;"}>
                <Card>
                    <CardTitle>15 Mins %</CardTitle>
                    <CardContentSmall>{PlusMinusComponent(price_15m)}</CardContentSmall>
                </Card>
                <Card>
                    <CardTitle>1 Hour %</CardTitle>
                    <CardContentSmall>{PlusMinusComponent(price_1h)}</CardContentSmall>
                </Card>
                <Card>
                    <CardTitle>1 Day %</CardTitle>
                    <CardContentSmall>{PlusMinusComponent(price_24h)}</CardContentSmall>
                </Card>
                <Card>
                    <CardTitle>7 Day %</CardTitle>
                    <CardContentSmall>{PlusMinusComponent(price_7d)}</CardContentSmall>
                </Card>
                <Card>
                    <CardTitle>30 Days %</CardTitle>
                    <CardContentSmall>{PlusMinusComponent(price_30d)}</CardContentSmall>
                </Card>
                <Card>
                    <CardTitle>1 Year %</CardTitle>
                    <CardContentSmall>{PlusMinusComponent(price_1y)}</CardContentSmall>
                </Card>
            </Row>
            <Row marginBottom={"12px;"}>
                <Card>
                    <CardTitle>Volume</CardTitle>
                    <CardContentSmall>{priceData?.quotes.USD.volume_24h.toFixed(2)}({PlusMinusComponent(volume_24h_change_24h)}, 24H)</CardContentSmall>
                </Card>
                <Card>
                    <CardTitle>Market Cap</CardTitle>
                    <CardContentSmall>{priceData?.quotes.USD.market_cap.toFixed(2)}({PlusMinusComponent(market_cap_change_24h)}, 24H)</CardContentSmall>
                </Card>
            </Row>
            <Row>
                <Card>
                    <CardTitle>First Date At</CardTitle>
                    <CardContentMideum>{year}-{month}-{date}</CardContentMideum>
                </Card>
                <Card>
                    <CardTitle>Rank</CardTitle>
                    <CardContentMideum>#{priceData?.rank}</CardContentMideum>
                </Card>
            </Row>
        </>
    )
}

export default Price;