import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodosId, getTodosById } from "./api";

export const useTodosId = () => {
  return useQuery({
    queryKey: "todos",
    queryFn: getTodosId,
  });
};

export const useTodos = (ids) => {
  return useQueries({
    queries: (ids ?? []).map((id) => {
      return {
        queryKey: ["todos", id],
        queryFn: () => getTodosById(id),
      };
    }),
  });
};
