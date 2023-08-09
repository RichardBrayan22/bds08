import { useEffect, useMemo, useState } from 'react';
import { FilterData } from '../../types/filter';
import { PieChartConfig } from '../../types/pieChart';
import { SalesByGender } from '../../types/salesByGender';
import { formatPrice } from '../../util/formatters';
import { buildFilterParams, requestBackend } from '../../util/request';
import PieChart from './Pie-chart';
import { buildSalesByGender } from './helpers';
import './styles.css';
import { SalesSummaryData } from '../../types/salesSummary';

type Props = {
  filterData?: FilterData;
};

const DashBoard = ({ filterData }: Props) => {
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState(0);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    requestBackend
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGender(response.data);
        setSalesByGender(newSalesByGender);
      });
  }, [params]);

  useEffect(() => {
    requestBackend
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        console.log(response.data);
        setTotalSum(response.data.sum);
      });
  }, [params]);

  return (
    <div className="dashboard-container base-card">
      <div className="statics-container">
        <h1 className="text-secondary statics-title">
          {formatPrice(totalSum)}
        </h1>
        <p>Total de vendas.</p>
      </div>
      <div className="pie-chart-container">
        <PieChart
          labels={salesByGender?.labels}
          series={salesByGender?.series}
          name="Generos"
        />
      </div>
    </div>
  );
};

export default DashBoard;
