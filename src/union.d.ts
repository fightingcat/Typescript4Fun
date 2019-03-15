type UnionPop<U> = (U extends any ? (i: (u: U) => void) => void : never) extends
(i: infer I) => void ? I extends { (e: infer E): void; } ? E : never : never;

type UnionToIntersection<U> = (U extends any ? (i: U) => void : never) extends
    (i: infer I) => void ? I : never;

type UnionToTuple<U> = UnionToTupleRecursively<U, []>;

type UnionToTupleRecursively<Union, Result extends any[]> = {
    1: Result;
    0: UnionToTupleRecursively<Exclude<Union, UnionPop<Union>>, TupleUnshift<Result, UnionPop<Union>>>
}[[Union] extends [never] ? 1 : 0];
