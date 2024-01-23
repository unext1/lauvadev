/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="@remix-run/node" />
/// <reference types="vite/client" />

type ObjectKeys<T> = T extends object
  ? (keyof T)[]
  : T extends number
  ? []
  : T extends Array<any> | string
  ? string[]
  : never;

interface ObjectConstructor {
  keys<T>(o: T): ObjectKeys<T>;
}
