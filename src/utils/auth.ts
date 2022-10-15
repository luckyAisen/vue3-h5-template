import type { Serializer } from "@vueuse/core";

/**
 * 猜测一个数据在 ts 中的类型
 */
export function serializerType<
  T extends string | number | boolean | object | null
>(rawInit: T) {
  return rawInit === null
    ? "any"
    : rawInit instanceof Set
    ? "set"
    : rawInit instanceof Map
    ? "map"
    : rawInit instanceof Date
    ? "date"
    : typeof rawInit === "boolean"
    ? "boolean"
    : typeof rawInit === "string"
    ? "string"
    : typeof rawInit === "object"
    ? "object"
    : Array.isArray(rawInit)
    ? "object"
    : !Number.isNaN(rawInit)
    ? "number"
    : "any";
}

/**
 * 序列化处理器
 */
export const serializers: Record<
  "boolean" | "object" | "number" | "any" | "string" | "map" | "set" | "date",
  Serializer<any>
> = {
  boolean: {
    read: (v: any) => v === "true",
    write: (v: any) => String(v),
  },
  object: {
    read: (v: any) => JSON.parse(v),
    write: (v: any) => JSON.stringify(v),
  },
  number: {
    read: (v: any) => Number.parseFloat(v),
    write: (v: any) => String(v),
  },
  any: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  string: {
    read: (v: any) => v,
    write: (v: any) => String(v),
  },
  map: {
    read: (v: any) => new Map(JSON.parse(v)),
    write: (v: any) =>
      JSON.stringify(Array.from((v as Map<any, any>).entries())),
  },
  set: {
    read: (v: any) => new Set(JSON.parse(v)),
    write: (v: any) => JSON.stringify(Array.from(v as Set<any>)),
  },
  date: {
    read: (v: any) => new Date(v),
    write: (v: any) => v.toISOString(),
  },
};
