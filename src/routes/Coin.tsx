import { Link, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { styled } from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
import { useQuery } from "react-query";
import { fetchCoin, fetchPrice } from "../api";
import Helmet from "react-helmet";
import { FaHome } from 'react-icons/fa';
import {RouteParams, RouteState, InfoData, PriceData} from "../interfaces/Coin.interface";


// components START =======================================
const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const HeaderLeft = styled.div`
    width: 20%;
    flex: 0 0 auto;
    font-size: 24px;
    `;
const HeaderRight = styled.div`
    width: 20%;
    flex: 0 0 auto;
    font-size: 24px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
  flex: 1;
  text-align: center;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.cardBgColor};
  color: ${props => props.theme.cardTextColor};
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{isActive: boolean}>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.cardBgColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${props => props.isActive ? props.theme.accentColor : props.theme.cardTextColor};
  a {
    display: block;
  }
`;
// components END =========================================

function Coin() {
    const {coinId} = useParams<RouteParams>();
    const {state} = useLocation<RouteState>();
    const priceMatch = useRouteMatch(`/${coinId}/price`);
    const chartMatch = useRouteMatch(`/${coinId}/chart`);
    const {isLoading:infoLoading, data:infoData} = useQuery<InfoData>(["info", coinId], () => fetchCoin(coinId));
    const {isLoading:priceLoading, data:priceData} = useQuery<PriceData>(["price", coinId], () => fetchPrice(coinId))//, {refetchInterval: 5000});
    const loading = infoLoading || priceLoading;
    return (
        <Container>
            <Helmet>
                <title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</title>
            </Helmet>
            <Header>
                <HeaderLeft><Link to="/"><FaHome /></Link></HeaderLeft>
                <Title>
                    {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
                </Title>
                <HeaderRight></HeaderRight>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
                ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{infoData?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${infoData?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Price:</span>
                            <span>{priceData?.quotes.USD.price.toFixed(2)}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{infoData?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{priceData?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{priceData?.max_supply}</span>
                        </OverviewItem>
                    </Overview>
                    <Tabs>
                        <Tab isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>
                    <Switch>
                        <Route path={`/:coinId/chart`}>
                            <Chart coinId={coinId}></Chart>
                        </Route>
                        <Route path={`/:coinId/price`}>
                            <Price priceData={priceData}></Price>
                        </Route>
                    </Switch>
                </>
                )
            }
        </Container>
    );
}

export default Coin;