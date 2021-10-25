## Preamble
- so we've dealt with state (useState)
- we've dealt with side effects (useEffect)

## Custom hooks
- up until this point, we've been consuming those within our components
- but custom hooks allow us to abstract the business logic out of our components and simply call them in those components that need them
- this means, i can keep my code more dry
- i can clean up our components

## Rules of hooks
- cannot be called conditionally (must be top level... before any return or early returns)
- only call react hooks from react functions (components/custom hooks)
- start with use

## Today
- we will be building four custom hooks and looking at two more/using them
- the examples will be simple, but remember we can make the logic as complex or simple as we want with custom hooks. I choose simplicity here so we don't get lost in the logic but instead can see the beauty of custom hooks

