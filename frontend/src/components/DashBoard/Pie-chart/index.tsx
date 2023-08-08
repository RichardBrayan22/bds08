import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helperts';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

const PieChart = ({ labels = [], name, series = [] }: Props) => {
  return (
    <div className="pie-chart">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        height={400}
        series={series}
      />
    </div>
  );
};

export default PieChart;
