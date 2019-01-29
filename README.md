# TypeScript FSA Redux Middleware

Fluent syntax for defining typesafe Redux vanilla middlewares on top of [typescript-fsa](https://github.com/aikoven/typescript-fsa).

This library is inspired by [typescript-fsa-reducers](https://github.com/dphilipson/typescript-fsa-reducers).

# Introduction

The major usage of this library is as look like this:
```
import {middleware} from 'typescript-fsa-redux-middleware';

const middleware = middleware()
.case(fetchSomething.done, (api, next, action) => {
  // Do followup manipulation of the API access
})

.case(fetchSomething.failed, (api, next, action) => {
  // Do error handling
})
```

# License
MIT

# Copyright
Copyright (c) 2018-2019 Sony Corporation.
