type TypeAssert<T, A> = T extends A ? T : never;

type Overwrite<T, S extends any> = { [P in keyof T]: S[P] };

type IsAny<T> = 1 extends (T extends never ? 1 : 0) ? 1 : 0;

type IsNever<T> = [T] extends [never] ? 1 : 0;
