export type Service = object | null | undefined

export type Get = {
  data: object,
  language: string | null,
  page: number,
  limit: number
} | undefined | null

export type Update = {
  filter: object,
  data: { $set: object } | null
} | undefined | null

export type Delete = { filter: object} | undefined | null
