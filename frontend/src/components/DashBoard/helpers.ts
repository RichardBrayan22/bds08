import { SalesByGender } from '../../types/salesByGender';
import { formatGender } from '../../util/formatters';

export const buildSalesByGender = (salesByGender: SalesByGender[]) => {
  const labels = salesByGender.map((sales) => formatGender(sales.gender));
  const series = salesByGender.map((sales) => sales.sum);

  return {
    labels,
    series,
  };
};
