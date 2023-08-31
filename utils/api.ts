export const API_ENDPOINT = "https://cpsc454api.mattrick.org/";

export async function getStat(name: string) {
  const endpoint = new URL(name, API_ENDPOINT).href;

  return fetch(endpoint)
    .then((resp) => resp.json());
}

export async function getChartData(stats: string[]) {
  const requests = stats.map((stat) => getStat(stat));

  return Promise.all(requests)
    .then((responses) => {
      const chartData: object[] = [];

      const first = responses[0][Object.keys(responses[0])[0]];

      for (let i = 0; i < first.length; i++) {
        const timestamp = first[i].timestamp;

        const data = responses.map((response) => {
          const key = Object.keys(response)[0];
          const point = response[key][i];
          
          return {
            [key]: point.data
          };
        });

        const flatData = Object.assign({}, ...data);
        
        chartData[i] = {
          timestamp,
          ...flatData
        };
      }

      return chartData;
    });
}
