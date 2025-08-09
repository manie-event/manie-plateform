export const keyWordsDtoToKeywords = (data: KeywordsDto): Keywords => {
  return {
    id: data.id,
    uuid: data.uuid,
    sector: data.sector,
    category: data.category,
    value: data.value,
  };
};
