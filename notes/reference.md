### Combinators

#### I Combinator or Identity Function

```
function (x) {
	return x;
};
```

#### K Combinator or Kestrel

```
function (x) {
	return function (y) {
		return x;
	};
};
```


#### B Combinator or Compose

```
function (a, b) {
    return function (c) {
        return a(b(c));
    };
};
```

### Applied combinators

#### Tap

```
function tap (value, fn) {
    if (fn === void 0) {
        return curried
    }
    else return curried(fn);

    function curried (fn) {
        if (typeof(fn) === 'function') {
            fn(value)
        }
        return value
    }
}
```

### Decorators

#### Once

```
function once (fn) {
    var done = false;

    return function () {
        return done ? void 0 : ((done = true), fn.apply(this, arguments))
    }
}
```

#### mapWith

```
function mapWith (fn) {
    return function (list) {
        return Array.prototype.map.call(list, function (something) {
            return fn.call(this, something);
        });
    };
};
```

#### Variadic

```
var __slice = Array.prototype.slice;

function variadic (fn) {
    var fnLength = fn.length;

    if (fnLength < 1) {
        return fn;
    }
    else if (fnLength === 1)  {
        return function () {
            return fn.call(this, __slice.call(arguments, 0));
        }
    }
    else {
        return function () {
            var numberOfArgs = arguments.length,
                namedArgs = __slice.call(arguments, 0, fnLength - 1),
                numberOfMissingNamedArgs = Math.max(fnLength - numberOfArgs - 1, 0),
                argPadding = new Array(numberOfMissingNamedArgs),
                variadicArgs = __slice.call(arguments, fn.length - 1);

            return fn.apply(
                this, 
                namedArgs.concat(argPadding).concat([variadicArgs])
            );
        }
    }
};
```