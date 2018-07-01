type Reverse1<T extends any[]> = [T[0]];
type Reverse2<T extends any[]> = [T[1], T[0]];
type Reverse4<T extends any[]> = [T[3], T[2], T[1], T[0]];
type Reverse8<T extends any[]> = [T[7], T[6], T[5], T[4], T[3], T[2], T[1], T[0]];
type Reverse16<T extends any[]> = [T[15], T[14], T[13], T[12], T[11], T[10], T[9], T[8], T[7], T[6], T[5], T[4], T[3], T[2], T[1], T[0]];
type Reverse32<T extends any[]> = [T[31], T[30], T[29], T[28], T[27], T[26], T[25], T[24], T[23], T[22], T[21], T[20], T[19], T[18], T[17], T[16], T[15], T[14], T[13], T[12], T[11], T[10], T[9], T[8], T[7], T[6], T[5], T[4], T[3], T[2], T[1], T[0]];
type Reverse64<T extends any[]> = [T[63], T[62], T[61], T[60], T[59], T[58], T[57], T[56], T[55], T[54], T[53], T[52], T[51], T[50], T[49], T[48], T[47], T[46], T[45], T[44], T[43], T[42], T[41], T[40], T[39], T[38], T[37], T[36], T[35], T[34], T[33], T[32], T[31], T[30], T[29], T[28], T[27], T[26], T[25], T[24], T[23], T[22], T[21], T[20], T[19], T[18], T[17], T[16], T[15], T[14], T[13], T[12], T[11], T[10], T[9], T[8], T[7], T[6], T[5], T[4], T[3], T[2], T[1], T[0]];
type Reverse128<T extends any[]> = [T[127], T[126], T[125], T[124], T[123], T[122], T[121], T[120], T[119], T[118], T[117], T[116], T[115], T[114], T[113], T[112], T[111], T[110], T[109], T[108], T[107], T[106], T[105], T[104], T[103], T[102], T[101], T[100], T[99], T[98], T[97], T[96], T[95], T[94], T[93], T[92], T[91], T[90], T[89], T[88], T[87], T[86], T[85], T[84], T[83], T[82], T[81], T[80], T[79], T[78], T[77], T[76], T[75], T[74], T[73], T[72], T[71], T[70], T[69], T[68], T[67], T[66], T[65], T[64], T[63], T[62], T[61], T[60], T[59], T[58], T[57], T[56], T[55], T[54], T[53], T[52], T[51], T[50], T[49], T[48], T[47], T[46], T[45], T[44], T[43], T[42], T[41], T[40], T[39], T[38], T[37], T[36], T[35], T[34], T[33], T[32], T[31], T[30], T[29], T[28], T[27], T[26], T[25], T[24], T[23], T[22], T[21], T[20], T[19], T[18], T[17], T[16], T[15], T[14], T[13], T[12], T[11], T[10], T[9], T[8], T[7], T[6], T[5], T[4], T[3], T[2], T[1], T[0]];

type Take1<T extends any[]> = [T[0]];
type Take2<T extends any[]> = [T[0], T[1]];
type Take4<T extends any[]> = [T[0], T[1], T[2], T[3]];
type Take8<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
type Take16<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], T[10], T[11], T[12], T[13], T[14], T[15]];
type Take32<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], T[10], T[11], T[12], T[13], T[14], T[15], T[16], T[17], T[18], T[19], T[20], T[21], T[22], T[23], T[24], T[25], T[26], T[27], T[28], T[29], T[30], T[31]];
type Take64<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], T[10], T[11], T[12], T[13], T[14], T[15], T[16], T[17], T[18], T[19], T[20], T[21], T[22], T[23], T[24], T[25], T[26], T[27], T[28], T[29], T[30], T[31], T[32], T[33], T[34], T[35], T[36], T[37], T[38], T[39], T[40], T[41], T[42], T[43], T[44], T[45], T[46], T[47], T[48], T[49], T[50], T[51], T[52], T[53], T[54], T[55], T[56], T[57], T[58], T[59], T[60], T[61], T[62], T[63]];
type Take128<T extends any[]> = [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], T[10], T[11], T[12], T[13], T[14], T[15], T[16], T[17], T[18], T[19], T[20], T[21], T[22], T[23], T[24], T[25], T[26], T[27], T[28], T[29], T[30], T[31], T[32], T[33], T[34], T[35], T[36], T[37], T[38], T[39], T[40], T[41], T[42], T[43], T[44], T[45], T[46], T[47], T[48], T[49], T[50], T[51], T[52], T[53], T[54], T[55], T[56], T[57], T[58], T[59], T[60], T[61], T[62], T[63], T[64], T[65], T[66], T[67], T[68], T[69], T[70], T[71], T[72], T[73], T[74], T[75], T[76], T[77], T[78], T[79], T[80], T[81], T[82], T[83], T[84], T[85], T[86], T[87], T[88], T[89], T[90], T[91], T[92], T[93], T[94], T[95], T[96], T[97], T[98], T[99], T[100], T[101], T[102], T[103], T[104], T[105], T[106], T[107], T[108], T[109], T[110], T[111], T[112], T[113], T[114], T[115], T[116], T[117], T[118], T[119], T[120], T[121], T[122], T[123], T[124], T[125], T[126], T[127]];

type Drop1<T extends any[]> = ((...t: T) => 0) extends ((a0: any, ...r: infer R) => 0) ? R : never;
type Drop2<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, ...r: infer R) => 0) ? R : never;
type Drop4<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, ...r: infer R) => 0) ? R : never;
type Drop8<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, ...r: infer R) => 0) ? R : never;
type Drop16<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, a8: any, a9: any, b0: any, b1: any, b2: any, b3: any, b4: any, b5: any, ...r: infer R) => 0) ? R : never;
type Drop32<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, a8: any, a9: any, b0: any, b1: any, b2: any, b3: any, b4: any, b5: any, b6: any, b7: any, b8: any, b9: any, c0: any, c1: any, c2: any, c3: any, c4: any, c5: any, c6: any, c7: any, c8: any, c9: any, d0: any, d1: any, ...r: infer R) => 0) ? R : never;
type Drop64<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, a8: any, a9: any, b0: any, b1: any, b2: any, b3: any, b4: any, b5: any, b6: any, b7: any, b8: any, b9: any, c0: any, c1: any, c2: any, c3: any, c4: any, c5: any, c6: any, c7: any, c8: any, c9: any, d0: any, d1: any, d2: any, d3: any, d4: any, d5: any, d6: any, d7: any, d8: any, d9: any, e0: any, e1: any, e2: any, e3: any, e4: any, e5: any, e6: any, e7: any, e8: any, e9: any, f0: any, f1: any, f2: any, f3: any, f4: any, f5: any, f6: any, f7: any, f8: any, f9: any, g0: any, g1: any, g2: any, g3: any, ...r: infer R) => 0) ? R : never;
type Drop128<T extends any[]> = ((...t: T) => 0) extends ((a0: any, a1: any, a2: any, a3: any, a4: any, a5: any, a6: any, a7: any, a8: any, a9: any, b0: any, b1: any, b2: any, b3: any, b4: any, b5: any, b6: any, b7: any, b8: any, b9: any, c0: any, c1: any, c2: any, c3: any, c4: any, c5: any, c6: any, c7: any, c8: any, c9: any, d0: any, d1: any, d2: any, d3: any, d4: any, d5: any, d6: any, d7: any, d8: any, d9: any, e0: any, e1: any, e2: any, e3: any, e4: any, e5: any, e6: any, e7: any, e8: any, e9: any, f0: any, f1: any, f2: any, f3: any, f4: any, f5: any, f6: any, f7: any, f8: any, f9: any, g0: any, g1: any, g2: any, g3: any, g4: any, g5: any, g6: any, g7: any, g8: any, g9: any, h0: any, h1: any, h2: any, h3: any, h4: any, h5: any, h6: any, h7: any, h8: any, h9: any, i0: any, i1: any, i2: any, i3: any, i4: any, i5: any, i6: any, i7: any, i8: any, i9: any, j0: any, j1: any, j2: any, j3: any, j4: any, j5: any, j6: any, j7: any, j8: any, j9: any, k0: any, k1: any, k2: any, k3: any, k4: any, k5: any, k6: any, k7: any, k8: any, k9: any, l0: any, l1: any, l2: any, l3: any, l4: any, l5: any, l6: any, l7: any, l8: any, l9: any, m0: any, m1: any, m2: any, m3: any, m4: any, m5: any, m6: any, m7: any, ...r: infer R) => 0) ? R : never;

type Concat1<A extends any[], B extends any[]> = ((a0: A[0], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat2<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat4<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat8<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], a4: A[4], a5: A[5], a6: A[6], a7: A[7], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat16<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], a4: A[4], a5: A[5], a6: A[6], a7: A[7], a8: A[8], a9: A[9], b0: A[10], b1: A[11], b2: A[12], b3: A[13], b4: A[14], b5: A[15], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat32<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], a4: A[4], a5: A[5], a6: A[6], a7: A[7], a8: A[8], a9: A[9], b0: A[10], b1: A[11], b2: A[12], b3: A[13], b4: A[14], b5: A[15], b6: A[16], b7: A[17], b8: A[18], b9: A[19], c0: A[20], c1: A[21], c2: A[22], c3: A[23], c4: A[24], c5: A[25], c6: A[26], c7: A[27], c8: A[28], c9: A[29], d0: A[30], d1: A[31], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat64<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], a4: A[4], a5: A[5], a6: A[6], a7: A[7], a8: A[8], a9: A[9], b0: A[10], b1: A[11], b2: A[12], b3: A[13], b4: A[14], b5: A[15], b6: A[16], b7: A[17], b8: A[18], b9: A[19], c0: A[20], c1: A[21], c2: A[22], c3: A[23], c4: A[24], c5: A[25], c6: A[26], c7: A[27], c8: A[28], c9: A[29], d0: A[30], d1: A[31], d2: A[32], d3: A[33], d4: A[34], d5: A[35], d6: A[36], d7: A[37], d8: A[38], d9: A[39], e0: A[40], e1: A[41], e2: A[42], e3: A[43], e4: A[44], e5: A[45], e6: A[46], e7: A[47], e8: A[48], e9: A[49], f0: A[50], f1: A[51], f2: A[52], f3: A[53], f4: A[54], f5: A[55], f6: A[56], f7: A[57], f8: A[58], f9: A[59], g0: A[60], g1: A[61], g2: A[62], g3: A[63], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;
type Concat128<A extends any[], B extends any[]> = ((a0: A[0], a1: A[1], a2: A[2], a3: A[3], a4: A[4], a5: A[5], a6: A[6], a7: A[7], a8: A[8], a9: A[9], b0: A[10], b1: A[11], b2: A[12], b3: A[13], b4: A[14], b5: A[15], b6: A[16], b7: A[17], b8: A[18], b9: A[19], c0: A[20], c1: A[21], c2: A[22], c3: A[23], c4: A[24], c5: A[25], c6: A[26], c7: A[27], c8: A[28], c9: A[29], d0: A[30], d1: A[31], d2: A[32], d3: A[33], d4: A[34], d5: A[35], d6: A[36], d7: A[37], d8: A[38], d9: A[39], e0: A[40], e1: A[41], e2: A[42], e3: A[43], e4: A[44], e5: A[45], e6: A[46], e7: A[47], e8: A[48], e9: A[49], f0: A[50], f1: A[51], f2: A[52], f3: A[53], f4: A[54], f5: A[55], f6: A[56], f7: A[57], f8: A[58], f9: A[59], g0: A[60], g1: A[61], g2: A[62], g3: A[63], g4: A[64], g5: A[65], g6: A[66], g7: A[67], g8: A[68], g9: A[69], h0: A[70], h1: A[71], h2: A[72], h3: A[73], h4: A[74], h5: A[75], h6: A[76], h7: A[77], h8: A[78], h9: A[79], i0: A[80], i1: A[81], i2: A[82], i3: A[83], i4: A[84], i5: A[85], i6: A[86], i7: A[87], i8: A[88], i9: A[89], j0: A[90], j1: A[91], j2: A[92], j3: A[93], j4: A[94], j5: A[95], j6: A[96], j7: A[97], j8: A[98], j9: A[99], k0: A[100], k1: A[101], k2: A[102], k3: A[103], k4: A[104], k5: A[105], k6: A[106], k7: A[107], k8: A[108], k9: A[109], l0: A[110], l1: A[111], l2: A[112], l3: A[113], l4: A[114], l5: A[115], l6: A[116], l7: A[117], l8: A[118], l9: A[119], m0: A[120], m1: A[121], m2: A[122], m3: A[123], m4: A[124], m5: A[125], m6: A[126], m7: A[127], ...r: B) => 0) extends ((...r: infer R) => 0) ? R : never;

type Magnitude<T> =
    T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 ?
    T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 ?
    T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 ?
    T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 ?
    T extends 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 ?
    T extends 0 | 1 | 2 | 3 ?
    T extends 0 | 1 ?
    T extends 0 ?
    0 : 1 : 2 : 4 : 8 : 16 : 32 : 64 : 128;

type Indices<T> = Exclude<keyof T, keyof []>;

type ToTuple<T> = T extends any[] ? T : any[];

type Head<T extends any[]> = Take1<T>[0];

type Tail<T extends any[]> = Drop1<T>;

type Unshift<T extends any[], X> = Concat1<[X], T>;

type Push<Tuple extends any[], X, R = Reverse<Tuple>, T extends any[]= ToTuple<R>> = Reverse<Unshift<T, X>>;

type Reverse<T extends any[], R extends any[]=[]> = {
    0: R;
    1: Concat1<T, R>;
    2: Reverse<Drop2<T>, Concat2<Reverse2<T>, R>>;
    4: Reverse<Drop4<T>, Concat4<Reverse4<T>, R>>;
    8: Reverse<Drop8<T>, Concat8<Reverse8<T>, R>>;
    16: Reverse<Drop16<T>, Concat16<Reverse16<T>, R>>;
    32: Reverse<Drop32<T>, Concat32<Reverse32<T>, R>>;
    64: Reverse<Drop64<T>, Concat64<Reverse64<T>, R>>;
    128: Reverse<Drop128<T>, Concat128<Reverse128<T>, R>>;
}[Magnitude<T['length']>];

type Concat<A extends any[], B extends any[], R = Reverse<A>, T extends any[]= ToTuple<R>> = Concat_<T, B>;

type Concat_<A extends any[], B extends any[]> = {
    0: B,
    1: Concat_<Drop1<A>, Concat1<Reverse1<A>, B>>;
    2: Concat_<Drop2<A>, Concat2<Reverse2<A>, B>>;
    4: Concat_<Drop4<A>, Concat4<Reverse4<A>, B>>;
    8: Concat_<Drop8<A>, Concat8<Reverse8<A>, B>>;
    16: Concat_<Drop16<A>, Concat16<Reverse16<A>, B>>;
    32: Concat_<Drop32<A>, Concat32<Reverse32<A>, B>>;
    64: Concat_<Drop64<A>, Concat64<Reverse64<A>, B>>;
    128: Concat_<Drop128<A>, Concat128<Reverse128<A>, B>>;
}[Magnitude<A['length']>]

// type T256 = Concat128<[], Concat128<[], []>>;
// type T512 = Concat<T256, T256>;
// type T1K = Concat<T512, T512>;
// type T2K = Concat<T1K, T1K>;
// type T4K = Concat<T2K, T2K>;
// type T8K = Concat<T4K, T4K>;
// type T16K = Concat<T8K, T8K>;
// type T32K = Concat<T16K, T16K>;
// type T64K = Concat<T32K, T32K>;
// type T128K = Concat<T64K, T64K>;
// type T256K = Concat<T128K, T128K>;
// type T512K = Concat<T256K, T256K>;
// type T1M = Concat<T512K, T512K>;
