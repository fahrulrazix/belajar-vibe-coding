import { Elysia } from 'elysia';

const port = process.env.PORT || 3000;

const app = new Elysia()
  .get('/', () => 'Hello World')
  .listen(port);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
