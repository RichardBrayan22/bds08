import { formatPrice } from '../../util/formatters';
import PieChart from './Pie-chart';
import './styles.css';

const DashBoard = () => {
  return (
    <div className="dashboard-container base-card">
      <div className="statics-container">
        <h1 className="text-secondary statics-title">{formatPrice(1990)}</h1>
        <p>Total de vendas.</p>
      </div>
      <div className="pie-chart-container">
        <PieChart
          labels={['dinheiro', 'Debito', 'credito']}
          series={[22, 33, 67]}
          name="Loja"
        />
      </div>
    </div>
  );
};

export default DashBoard;
