
# Setup

```
npm install
```

Parse the `test.md` markdown file

```
node parse-md.js
```

This would generate an `md.json` in the utils folder;

The markdown logic is that the first brackets `{npm[lint,css]}` in the header will be parsed, first item is the `id` the array are the next steps it would jump to.