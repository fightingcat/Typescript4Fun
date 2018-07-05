function loop(n: number, body: (i: number, n: number) => void) {
    for (let i = 0; i < n; i++) body(i, n);
}

function map<T>(n: number, body: (i: number, n: number) => T): T[] {
    return Array.from({ length: n }).map((_, i) => body(i, n));
}

function take(n: number, gen: string | Iterator<string>) {
    let array = Array.from<string>({ length: n });
    return typeof gen == 'string'
        ? array.map(_ => gen)
        : array.map(_ => gen.next().value);
}

function take1(gen: string | Iterator<string>) {
    return typeof gen == 'string' ? gen : gen.next().value;
}

function* zip(...gen: (string | Iterator<string>)[]) {
    while (true) yield gen.map(g => take1(g)).join('');
}

function* id(capital?: boolean) {
    let letters = capital
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        : 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 26; i++) {
        for (let j = 0; j < 10; j++) {
            yield letters.charAt(i) + j;
        }
    }
}

function* count() {
    for (let i = 0; ; i++) yield '' + i;
}

function* countDown(start: number) {
    for (let i = start; ; i--) yield '' + i;
}

function PoT(n: number) {
    return Math.pow(2, n);
}

function size(n: number) {
    let k = 1024, m = k * k;
    return n < k ? n : n < m
        ? (n / k) + 'K'
        : (n / m) + 'M';
}

function fwrap(list: string | string[]) {
    return typeof list == 'string'
        ? `(${list}) => 0`
        : `(${list.join(', ')}) => 0`;
}

function replace(template: string, values: Record<string, any>) {
    return template.replace(/\$\d/g, k => values[k]);
}

function genCode(max: number) {
    const ID = () => id(true);
    max = Math.min(max, 9);

    return [
        // TODO: Take, Drop
        , ...[
            `// Drop equivalency`,
            `// unfortunately we can't drop elements the way we want, but this one is also much useful.`,
            `type DropEqv<T extends any[], E extends any[]> = {`,
            `\t0: T`,
            ...map(max, i => `\t${PoT(i)}: DropEqv<Drop${PoT(i)}<T>, Drop${PoT(i)}<E>>`),
            `}[Measure<E['length']>];`
        ],

        , ...[
            `// concat reversely (left part)`,
            `type ConcatRev<A extends any[], B extends any[] = []> = {`,
            `\t0: B;`,
            ...map(max, i => `\t${PoT(i)}: ConcatRev<Drop${PoT(i)}<A>, ConcatRev${PoT(i)}<A, B>>;`),
            `}[Measure<A['length']>];`
        ],

        , ...[
            `// concat reversely and make optional (left part)`,
            `type ConcatRev$<A extends any[], B extends any[] = []> = {`,
            `\t0: B;`,
            ...map(max, i => `\t${PoT(i)}: ConcatRev$<Drop${PoT(i)}<A>, ConcatRev${PoT(i)}$<A, B>>;`),
            `}[Measure<A['length']>];`
        ],

        `// alias and helpers`, ,
        `// reverse`,
        `type Reverse<T extends any[]> = ConcatRev<T>;`, ,
        `// reverse and make optional`,
        `type Reverse$<T extends any[]> = ConcatRev$<T>;`, ,
        `// concat`,
        `type Concat<A extends any[], B extends any[] = []> = ConcatRev<ConcatRev<A>, B>;`, ,
        `// concat and make optional`,
        `type Concat$<A extends any[], B extends any[] = []> = ConcatRev$<ConcatRev$<A>, B>;`, ,
        `type Head<T extends any[]> = Take1<T>[0];`, ,
        `type Tail<T extends any[]> = Drop1<T>;`, ,
        `type Unshift<T extends any[], X> = ConcatRev1<[X], T>;`, ,
        `type Push<T extends any[], X> = ConcatRev<ConcatRev1<[X], ConcatRev<T>>>;`, ,
        `type Indices<T> = Exclude<keyof T, keyof []>;`, ,

        `// to bypass type checker`,
        `type AsTuple<T> = T extends any[] ? T : never;`, ,

        // Beware of dragon
        , [
            "/*",
            " *                                 ==(W{==========-      /===-",
            " *                                   ||  (.--.)         /===-_---~~~~~~~~~------____",
            " *                                   | \\_,|**|,__      |===-~___                _,-' `",
            " *                      -==\\\\        `\\ ' `--'   ),    `//~\\\\   ~~~~`---.___.-~~",
            " *                  ______-==|        /`\\_. .__/\\ \\    | |  \\\\           _-~`",
            " *            __--~~~  ,-/-==\\\\      (   | .  |~~~~|   | |   `\\        ,'",
            " *         _-~       /'    |  \\\\     )__/==0==-\\<>/   / /      \\      /",
            " *       .'        /       |   \\\\      /~\\___/~~\\/  /' /        \\   /'",
            " *      /  ____  /         |    \\`\\.__/-~~   \\  |_/'  /          \\/'",
            " *     /-'~    ~~~~~---__  |     ~-/~         ( )   /'        _--~`",
            " *                       \\_|      /        _) | ;  ),   __--~~",
            " *                         '~~--_/      _-~/- |/ \\   '-~ \\",
            " *                        {\\__--_/}    / \\\\_>-|)<__\\      \\",
            " *                        /'   (_/  _-~  | |__>--<__|      |",
            " *                       |   _/) )-~     | |__>--<__|      |",
            " *                       / /~ ,_/       / /__>---<__/      |",
            " *                      o-o _//        /-~_>---<__-~      /",
            " *                      (^(~          /~_>---<__-      _-~",
            " *                     ,/|           /__>--<__/     _-~",
            " *                  ,//('(          |__>--<__|     /  -Alex Wargacki  .----_",
            " *                 ( ( '))          |__>--<__|    |                 /' _---_~\\",
            " *              `-)) )) (           |__>--<__|    |               /'  /     ~\\`\\",
            " *             ,/,'//( (             \\__>--<__\\    \\            /'  //        ||",
            " *           ,( ( ((, ))              ~-__>--<_~-_  ~--____---~' _/'/        /'",
            " *         `~/  )` ) ,/|                 ~-_~>--<_/-__       __-~ _/",
            " *       ._-~//( )/ )) `                    ~~-'_/_/ /~~~~~~~__--~",
            " *        ;'( ')/ ,)(                              ~~~~~~~~~~",
            " *       ' ') '( (/",
            " *         '   '  `",
            " */"
        ].join('\n'),

        , ...[
            `type Measure<T extends number> =`,
            ...map(max, i => `\t[T] extends [LessThan${PoT(i)}] ?`).reverse(),
            `\t0 : ${map(max - 1, PoT).join(' : ')} : number extends T ? never : ${PoT(max - 1)};`,
            ...map(max, i => `type LessThan${PoT(i)} = ${take(PoT(i), count()).join(' | ')};`),
        ],

        // drop
        map(max, i => {
            return replace(`type Drop$1<T extends any[]> = (($2) extends $3 ? R : never);`, {
                $1: PoT(i),
                $2: fwrap('..._: T'),
                $3: fwrap(take(PoT(i), zip(id(), '?: any')).concat('..._: infer R'))
            });

        }).join('\n'),

        // take
        map(max, i => {
            return replace(`type Take$1<T extends any[]> = ($2) extends ($3) ? [$4] : never`, {
                $1: PoT(i),
                $2: fwrap('..._: T'),
                $3: fwrap(take(PoT(i), zip(id(), ': infer ', ID())).concat(`..._: any[]`)),
                $4: take(PoT(i), ID()).join(', ')
            });
        }).join('\n'),

        // take and make optional
        map(max, i => {
            return replace(`type Take$1$<T extends any[]> = ($2) extends ($3) ? [$4] : never`, {
                $1: PoT(i),
                $2: fwrap('..._: T'),
                $3: fwrap(take(PoT(i), zip(id(), ': infer ', ID())).concat(`..._: any[]`)),
                $4: take(PoT(i), zip(ID(), '?')).join(', ')
            });

        }).join('\n'),

        // concat reversely
        map(max, i => {
            return replace(`type ConcatRev$1<A extends any[], B extends any[]> = ($2) extends $3 ? R : never;`, {
                $1: PoT(i),
                $2: fwrap(take(PoT(i), zip(id(), ': A[', countDown(PoT(i) - 1), ']')).concat('..._: B')),
                $3: fwrap('..._: infer R'),
            });

        }).join('\n'),

        // concat reversely and make optional
        map(max, i => {
            return replace(`type ConcatRev$1$<A extends any[], B extends any[]> = ($2) extends $3 ? R : never;`, {
                $1: PoT(i),
                $2: fwrap(take(PoT(i), zip(id(), '?: A[', countDown(PoT(i) - 1), ']')).concat('..._: B')),
                $3: fwrap('..._: infer R'),
            });

        }).join('\n'),

        // Packed
        map(max + 7, i => {
            return i <= max ? i < 4
                ? replace(`type Packed$1 = [$2];`, {
                    $1: size(PoT(i)),
                    $2: map(PoT(i), j => 'any').join(', ')
                })
                : replace(`type Packed$1 = ConcatRev$2<Packed$3, Packed$3>;`, {
                    $1: size(PoT(i)),
                    $2: PoT(i - 1),
                    $3: size(PoT(i - 1))
                })
                : replace(`type Packed$1 = ConcatRev<Packed$3, Packed$3>;`, {
                    $1: size(PoT(i)),
                    $2: PoT(i - 1),
                    $3: size(PoT(i - 1))
                });
        }).join('\n'),

        // Packed optional
        map(max + 7, i => {
            return i <= max ? i < 4
                ? replace(`type Packed$1$ = [$2];`, {
                    $1: size(PoT(i)),
                    $2: map(PoT(i), j => 'any?').join(', ')
                })
                : replace(`type Packed$1$ = ConcatRev$2$<Packed$3$, Packed$3$>;`, {
                    $1: size(PoT(i)),
                    $2: PoT(i - 1),
                    $3: size(PoT(i - 1))
                })
                : replace(`type Packed$1$ = ConcatRev$<Packed$3$, Packed$3$>;`, {
                    $1: size(PoT(i)),
                    $2: PoT(i - 1),
                    $3: size(PoT(i - 1))
                });
        }).join('\n'),

    ].join('\n');
}

console.log(genCode(4));