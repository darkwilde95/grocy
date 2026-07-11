export type Order<T> = {
  field: keyof T;
  order: "ASC" | "DESC";
};

export type Pagination = {
  offset: number;
  limit: number;
};
