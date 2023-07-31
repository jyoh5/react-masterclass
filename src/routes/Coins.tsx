import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { fetchCoins } from "../api";
import {Helmet} from "react-helmet";
import {ICoin} from "../interfaces/Coin.interface";
import { useSetRecoilState } from "recoil";
import { isDartAtom } from "../atoms";

const Container = styled.div`
    padding: 0px 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const CoinsList = styled.ul``;
const Coin = styled.li`
    background-color: ${props => props.theme.cardBgColor};
    color: ${props => props.theme.cardTextColor};
    margin-bottom: 10px;
    border-radius: 15px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: flex;
        align-items: center;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;


const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;


const Loader = styled.span`
    text-align: center;
    display: block;
`;

const Img = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;




function Coins() {
    const setDarkAtom = useSetRecoilState(isDartAtom);
    const toggleDarkAtom = () => setDarkAtom(prev => !prev);
    const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins); // 
    return (
        <Container>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Header>
                <Title>Main</Title>
                <button onClick={toggleDarkAtom}>Toggle Mode</button>
            </Header>
            {isLoading ? <Loader>Loading...</Loader> : (
                <CoinsList>
                    {data?.slice(0, 100).map(coin => (
                        <Coin key={coin.id}>
                            <Link to={{
                                pathname: `/${coin.id}`,
                                state: {name: coin.name},
                            }}>
                                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    ))}
                </CoinsList>
            )}
        </Container>
    );
}

export default Coins;