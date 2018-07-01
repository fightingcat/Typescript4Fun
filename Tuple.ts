type Reverse1<T extends any[]> = [T[0]];
type Reverse2<T extends any[]> = [T[1], T[0]];
type Reverse4<T extends any[]> = [T[3], T[2], T[1], T[0]];
type Reverse8<T extends any[]> = [T[7], T[6], T[5], T[4], T[3], T[2], T[1], T[0]];

type Take1<T extends any[]> = [T[0]];
type Take2<T extends any[]> = [T[0], T[1]];
type Take4<T extends any[]> = [T[0], T[1], T[2], T[3]];
type Take8<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];

type Drop1<T extends any[]> = ((...t: T) => 0) extends ((a0: any, ...r: infer R) => 0) ? R : never;
type Drop2<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, ...r: infer R) => 0) ? R : never;
type Drop4<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, ...r: infer R) => 0) ? R : never;
type Drop8<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, ...r: infer R) => 0) ? R : never;

type Concat1<A extends any[], B extends any[]> = ((a0: A[0], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat2<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat4<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat8<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], a4: A[4], a5: A[5], a6: A[6], a7: A[7], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;

type Optional1<A extends any[], B extends any[]> = ((a0?: A[0], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Optional2<A extends any[], B extends any[]> = ((a0?: A[0], a1?: A[1], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Optional4<A extends any[], B extends any[]> = ((a0?: A[0], a1?: A[1], a2?: A[2], a3?: A[3], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Optional8<A extends any[], B extends any[]> = ((a0?: A[0], a1?: A[1], a2?: A[2], a3?: A[3], a4?: A[4], a5?: A[5], a6?: A[6], a7?: A[7], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;

// this is the magic key.
type Magnitude<T extends number> =
    T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 ?
    T extends 0 | 1 | 2 | 3 ?
    T extends 0 | 1 ?
    T extends 0 ?
    0 : 1 : 2 : 4 : number extends T ? never : 8;

type Reverse<T extends any[], _ extends any[]=[]> = {
    0: _;
    1: Concat1<T, _>;
    2: Reverse<Drop2<T>, Concat2<Reverse2<T>, _>>;
    4: Reverse<Drop4<T>, Concat4<Reverse4<T>, _>>;
    8: Reverse<Drop8<T>, Concat8<Reverse8<T>, _>>;
}[Magnitude<T['length']>];

// unfortunately we can't drop elements the way we want, but this one is also much useful.
type DropEqv<T extends any[], E extends any[]> = {
    0: T;
    1: DropEqv<Drop1<T>, Drop1<E>>;
    2: DropEqv<Drop2<T>, Drop2<E>>;
    4: DropEqv<Drop4<T>, Drop4<E>>;
    8: DropEqv<Drop8<T>, Drop8<E>>;
}[Magnitude<E['length']>];

// A need to be reversed
type Concat_<A extends any[], B extends any[]> = {
    0: B,
    1: Concat_<Drop1<A>, Concat1<Reverse1<A>, B>>;
    2: Concat_<Drop2<A>, Concat2<Reverse2<A>, B>>;
    4: Concat_<Drop4<A>, Concat4<Reverse4<A>, B>>;
    8: Concat_<Drop8<A>, Concat8<Reverse8<A>, B>>;
}[Magnitude<A['length']>];

// A need to be reversed
type Optional_<T extends any[], _ extends any[]=[]> = {
    0: _;
    1: Optional_<Drop1<T>, Optional1<Reverse1<T>, _>>;
    2: Optional_<Drop2<T>, Optional2<Reverse2<T>, _>>;
    4: Optional_<Drop4<T>, Optional4<Reverse4<T>, _>>;
    8: Optional_<Drop8<T>, Optional8<Reverse8<T>, _>>;
}[Magnitude<T['length']>];

// some helpers
type Head<T extends any[]> = Take1<T>[0];
type Tail<T extends any[]> = Drop1<T>;
type Unshift<T extends any[], X> = Concat1<[X], T>;
type Push<T extends any[], X> = Reverse<Concat1<[X], Reverse<T>>>;

type Indices<T> = Exclude<keyof T, keyof []>;
type Lambda<Args extends any[], R = void> = (...r: Args) => R;

// A loophole, I would rather not to use it.
// type ToTuple<T> = T extends any[] ? T : any[];
// type Concat<A extends any[], B extends any[], _0 = Reverse<A>, _1 extends any[]= ToTuple<_0>> = Concat_<_1, B>;
// type Optional<T extends any[], _0 = Reverse<T>, _1 extends any[]= ToTuple<_0>> = Optional_<_1, []>;

type ASSERT<T, U extends T> = T;
type T8 = Concat8<[], []>;
type T16 = Concat_<T8, T8>;
type T32 = Concat_<T16, T16>;
type T64 = Concat_<T32, T32>;
type T128 = Concat_<T64, T64>;
type T256 = Concat_<T128, T128>;
type T512 = Concat_<T256, T256>;
type T1K = Concat_<T512, T512>;

{ let _: ASSERT<T1K['length'], 1024>; }

type BindFunction<T extends any[], P extends any[], R> = {
    0: MyFunction<T, R>;
    1: BindFunction<Drop1<T>, Drop1<P>, R>;
    2: BindFunction<Drop2<T>, Drop2<P>, R>;
    4: BindFunction<Drop4<T>, Drop4<P>, R>;
    8: BindFunction<Drop8<T>, Drop8<P>, R>;
}[Magnitude<P['length']>];

interface MyFunction<T extends any[], R> extends Function {
    (...t: T): R;
    bind<P extends Optional_<Reverse<T>>>(...p: P): BindFunction<T, P, R>;
}

type ConvertFunction<T> = T extends MyFunction<infer X, infer R> ? MyFunction<X, R> : never;

function f(a: number, b: boolean, c: string) { }

let f1: ConvertFunction<typeof f>;
let f2 = f1.bind(1);
let f3 = f2.bind(false);
let f4 = f3.bind('test');

f1(1, true, 'test');
f2(true, 'test');
f3('test');
f4();
