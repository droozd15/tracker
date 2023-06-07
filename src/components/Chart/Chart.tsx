import ChartBar from './ChartBar';
import './Chart.css';

type Props = {
  dataPoints: {
    value: number;
    label: string;
  }[];
}
const Chart = ({dataPoints}: Props) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => <ChartBar key={index} {...dataPoint} maxValue={totalMaximum}/>)}
    </div>
  );
};

export default Chart;
