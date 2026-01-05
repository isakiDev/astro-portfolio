import type { Pagination } from "../interfaces/pagination.interface";

export const paginate = <T>({
  items,
  perPage,
  currentPage = 1,
}: Pagination<T>) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / perPage);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    paginatedItems,
    currentPage,
    totalPages,
    perPage,
    totalItems,
  };
};
