# nextjs-startup-with-auth
About
Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack, babel or express and with automatic routing and without the constraints of projects like Create React App.

This is a starter project that provides an example of how to use Next.js without the need for  Express. Examples of how to include data from remote REST APIs and incorporate an authentication system that using jwt(https://jwt.io/).

This project exists to make it easier to get started a creating production app in Next.js. You are invited to use it as a reference or to copy it and use it as a base for your own projects. Contributions to improve this project are welcome.

Built with
NextJS
Sequelize
mysql


Development setup:
Clone the repositery.
https://github.com/mazinabed/nextjs-startup-with-auth.git
Install the dependencies in the project folder:
npm install


Then start the app in development mode:

npm run dev

-next.config.js
Basic configuration of the app is handled in next.config.js.

It is also where the next.functions.js files are loaded.