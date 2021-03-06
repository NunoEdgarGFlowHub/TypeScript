/a/lib/tsc.js --w
//// [/user/username/projects/myproject/a.ts]
import {B} from './b';
declare var console: any;
let b = new B();
console.log(b.c.d);

//// [/user/username/projects/myproject/b.ts]
import {C} from './c';
export class B
{
    c = new C();
}

//// [/user/username/projects/myproject/c.ts]
export class C
{
    d = 1;
}

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"assumeChangesOnlyAffectDirectDependencies":true}}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/c.js]
"use strict";
exports.__esModule = true;
var C = /** @class */ (function () {
    function C() {
        this.d = 1;
    }
    return C;
}());
exports.C = C;


//// [/user/username/projects/myproject/b.js]
"use strict";
exports.__esModule = true;
var c_1 = require("./c");
var B = /** @class */ (function () {
    function B() {
        this.c = new c_1.C();
    }
    return B;
}());
exports.B = B;


//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;
var b_1 = require("./b");
var b = new b_1.B();
console.log(b.c.d);



Output::
>> Screen clear
12:00:25 AM - Starting compilation in watch mode...



12:00:32 AM - Found 0 errors. Watching for file changes.


Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts"]
Program options: {"assumeChangesOnlyAffectDirectDependencies":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/a.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/b.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/c.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change:: Rename property d to d2 of class C

//// [/user/username/projects/myproject/c.ts]
export class C
{
    d2 = 1;
}

//// [/user/username/projects/myproject/c.js]
"use strict";
exports.__esModule = true;
var C = /** @class */ (function () {
    function C() {
        this.d2 = 1;
    }
    return C;
}());
exports.C = C;


//// [/user/username/projects/myproject/b.js] file written with same contents

Output::
>> Screen clear
12:00:36 AM - File change detected. Starting incremental compilation...



12:00:43 AM - Found 0 errors. Watching for file changes.


Program root files: ["/user/username/projects/myproject/a.ts","/user/username/projects/myproject/b.ts","/user/username/projects/myproject/c.ts"]
Program options: {"assumeChangesOnlyAffectDirectDependencies":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/b.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/c.ts
/user/username/projects/myproject/b.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/b.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/c.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
