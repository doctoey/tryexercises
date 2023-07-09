### Vite


### Step deploy to github pages
```
npm install gh-pages --save-dev
```

### Step 1: Add homepage to `package.json`
```
"homepage": "https://<username>.github.io/<reponame>"
```

### Step 2: Add deploy to scripts in `package.json`
```
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Add basename to `vite.config.js`
```
export default defineConfig({
  //...
  base: '/<reponame>/'
  //...
})
```

### Step 4: Deploy the site by running npm run deploy
```
npm run deploy
```
go to `https://<username>.github.io/<reponame>` to see the result.