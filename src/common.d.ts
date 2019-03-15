type TypeAssert<T, A> = T extends A ? T : never;

type Overwrite<T, S extends any> = { [P in keyof T]: S[P] };