import type { Keywords } from '~/models/keywords/Keywords';

export const useKeywords = () => {
  const config = useRuntimeConfig();

  const getKeywords = async (query: string) => {
    console.log(`Fetching keywords with query: ${query}`);

    try {
      const { data } = await axios.get(`${config.public.apiUrl}/keyword`, {
        params: { q: query, limit: 1000 },
        headers: {
          Authorization: `Bearer ${useCookie('token').value}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(data, 'data keywords');

      const keyWordFilter = data.data
        .filter((keyword: Keywords) => keyword.sector.toLowerCase() == query.toLowerCase())
        .slice(0, 100);

      console.log(keyWordFilter, 'data keyWordFilter');

      // return keyWordFilter;
    } catch (error: unknown) {
      console.error('Error fetching keywords:', error);
      throw new Error('Failed to fetch keywords');
    }
  };
  return {
    getKeywords,
  };
};
