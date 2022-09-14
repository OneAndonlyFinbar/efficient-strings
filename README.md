🚀🚀Most efficient string builder you'll ever use!!🚀🚀

# Examples

```ts
import { EfficientString } from 'efficient-strings';
or
const EfficientString = require('efficient-strings').EfficientString;

// Creates new string object with value "hello!" and build efficiency of 1
// Build efficiency is range an integer 1-5, 1 being the "most efficient I guess"
const string = new EfficientString('Hello!', 1);

//Log string's value
console.log(string.build());

//Log string's build time, note this wont be available until the string is built.
console.log(string.buildTime);
```