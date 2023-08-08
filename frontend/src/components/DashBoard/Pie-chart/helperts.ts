import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif',
      },
    },
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 6,
      labels: {
        colors: '#8d8d8d',
      },
      fontFamily: 'Roboto, sans-serif',
      fontSize: '18px',
      itemMargin: {
        vertical: 6,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 0,
              formatter: function () {
                return name;
              },
            },
            total: {
              show: false,
              showAlways: true,
              fontSize: '24px',
              color: '#ABB1C0',
              fontFamily: 'Roboto, sans-serif',
              formatter: function () {
                return '';
              },
            },
          },
        },
      },
    },
    chart: {
      height: '400px',
    },
  } as ApexOptions;
};
