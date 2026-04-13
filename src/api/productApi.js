import axios from "axios";

const BASE_URL = "https://panda-market-api.vercel.app";
export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) => {
  const res = await axios.get(`${BASE_URL}/products`, {
    params: {
      page,
      pageSize,
      orderBy,
      keyword,
    },
  });

  return res.data;
};

export const getProductDetail = async (productId) => {
  const res = await axios.get(`${BASE_URL}/products/${productId}`);
  return res.data;
};
