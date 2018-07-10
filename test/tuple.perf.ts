import 'typescript';
import * as path from 'path';
import * as child from 'child_process';
import { performance } from 'perf_hooks';

const options = [
    "--target esnext",
    "--lib esnext",
    "--strict",
    "--noEmit",
].join(" ");

const test_baseline = path.resolve('./src/tuple.d.ts');
const test_concat = [
    path.resolve('./src/tuple.d.ts'),
    path.resolve('./test/fixtures/tuple.concat.ts')
].join(" ");

function profile(test: string, command: string) {
    const t1 = performance.now();

    try {
        child.execSync(command, { stdio: ['inherit', 'inherit', 'inherit'] });
    } catch { };

    console.log(`${test}: ${performance.now() - t1} ms`);
}

console.log("compile time:");
profile("baseline", `tsc ${options} ${test_baseline}`);
profile("tuple concatenation", `tsc ${options} ${test_concat}`);