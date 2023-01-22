export const paginationLink = (bracket, region, page) => {
  return {
    to: "/rankings",
    query: { bracket: bracket, region: region, page: page },
  };
};
