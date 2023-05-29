import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";

export const useGetData = (keys, url, Options) => {
  return useQuery(keys, () => instance.get(url).then((res) => res.data), {
    ...Options,
  });
};

