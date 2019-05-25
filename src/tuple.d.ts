type TupleHead<T extends any[]> = T[0];

type TupleLast<T extends any[]> = T[TupleTail<T>['length']];

type TupleTail<T extends any[]> = ((...t: T) => void) extends (x: any, ...t: infer R) => void ? R : never;

type TupleUnshift<T extends any[], X> = ((x: X, ...t: T) => void) extends (...t: infer R) => void ? R : never;

type TuplePush<T extends any[], X> = TypeAssert<Overwrite<TupleUnshift<T, any>, T & { [x: string]: X }>, any[]>;

type TupleConcat<A extends any[], B extends any[]> = {
    1: A,
    0: TupleConcat<TuplePush<A, B[0]>, TupleTail<B>>
}[B extends [] ? 1 : 0];
