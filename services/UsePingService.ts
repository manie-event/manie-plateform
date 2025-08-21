export const usePingService = () => {
  const config = useRuntimeConfig();

  const ping = async () => {
    try {
      const { data } = await axios.get(`${config.public.apiUrl}/ping`);
      console.log(data, 'data ping');

      if (!data || data.status !== 200) {
        throw new Error('Ping failed');
      }

      return data;
    } catch (error) {
      console.error('Error during ping:', error);
      throw error;
    }
  };

  return { ping };
};
