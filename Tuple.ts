// need ts 3.0
type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
type Last<T extends any[]> = { 1: T[0], 0: Last<Tail<T>> }[T extends [any] ? 1 : 0];
type Tail<T extends any[]> = ((...x: T) => void) extends ((h: any, ...rest: infer R) => void) ? R : never;
type Unshift<T extends any[], V, U = (a: V, ...b: T) => void> = U extends (...x: infer R) => void ? R : never;
