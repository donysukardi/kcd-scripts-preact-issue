# kcd-scripts issue#50

This is a test repository to reproduce issue in https://github.com/kentcdodds/kcd-scripts/issues/50 and to test the solution

## Instructions

Clone this repository and run `yarn` in the project root folder. This will link the package and install the dependencies required in example folder as well.

### Example with current kcd-scripts

To reproduce the issue, run `yarn example:original`. This will run the build with existing kcd-scripts and start the example as-is.

You should be getting `Uncaught ReferenceError: h is not defined` in console when trying to access the site.

### Example with kcd-scripts with patch applied

To try out the fix, run `yarn example:patch`. This will apply the same patch as in https://github.com/kentcdodds/kcd-scripts/pull/51 to kcd-scripts, run the build and start the example.

You should see `Hello World` printed on the site.

## Findings

```javascript
// preact/dist/example-lib.cjs.js - original

'use strict';

require('preact');

var Example = function () {
  return h(
    'div',
    null,
    'Hello Preact'
  );
};

module.exports = Example;
```

```javascript
// preact/dist/example-lib.cjs.js - patch

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('preact'));

var Example = function () {
  return React.h(
    'div',
    null,
    'Hello Preact'
  );
};

module.exports = Example;
```

Notice `h` is not defined in the original build.

## Notes

[patch-package](https://github.com/kentcdodds/kcd-scripts/pull/51) is awesome!
