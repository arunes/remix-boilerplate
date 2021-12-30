# remix-boilerplate

An opinionated boilerplate for Remix apps

This project is Typescript Remix boilerplate app configured with some useful packages

- [tailwind.css](https://tailwindcss.com/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)

Configured for react, typescript with prettier support

- [jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- [husky](https://typicode.github.io/husky/)

  pre-commit hook configured to run, tsc, eslint and prettier

Clone the repo and run `npm install`. To run the app in development mode, run `npm run dev`

Below Remix's official documentation, happy coding👋

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
