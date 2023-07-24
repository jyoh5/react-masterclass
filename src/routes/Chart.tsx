import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { styled } from "styled-components";

const TextCenter = styled.div`
    text-align: center;
`

interface ChartProps {
    coinId: string
}
interface IHistorical {
    time_open: number,
    time_close: number,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number,
    market_cap: number,
  }
interface IHistoricalError {
    error?: string,
}


function Chart({coinId}: ChartProps) {
    const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId))//), {refetchInterval: 10000})
    if (data && !data.length){
      return <TextCenter>Price data not found.</TextCenter>
    }
    const mappedOhlcvData = data?.map((item: IHistorical) => ({
      x: item.time_open * 1000,
      y: [item.open, item.high, item.low, item.close],
      }));
    return (
        <div>
        {isLoading ? (
          "Loading chart..."
        ) : (
          <ApexChart
            type="candlestick"
            series={[{ data: mappedOhlcvData }] as unknown as number[]} 
            options={{
              theme: {
                mode: "dark",
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: "transparent",
              },
              // grid: { show: false },
              // stroke: {
              //   curve: "smooth",
              //   width: 4,
              // },
              // yaxis: {
              //   show: false,
              // },
              xaxis: {
              //   axisBorder: { show: false },
              //   axisTicks: { show: false },
              //   labels: { show: false },
                type: "datetime",
              //   // categories: data?.map((price) => price.time_close),
              },
              // fill: {
              //   type: "gradient",
              //   gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              // },
              // colors: ["#0fbcf9"],
              // tooltip: {
              //   y: {
              //     formatter: (value:number) => `$${value.toFixed(2)}`,
              //   },
              // },
            }}
          />
        )}
      </div>
    );
}

export default Chart;