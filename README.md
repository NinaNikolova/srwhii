# `SRWHII` is a repo with only purpose to create `READY TO USE COMPONENTS` for in Angular and Express.js / with TypeScript/

## Frontend

- Create project's folder
- Install @angular/cli
- Create App as frontend

1. Header component
2. Home page
3. Search component
   -to be able to use params.searchTerm / with dot, not square brackets/ have to change in tsconfig.json - "noPropertyAccessFromIndexSignature": false,
4. Tags component
5. Organization page
6. Not Found Component
7. Login page and complex logic
8. UserService
9. A lot of Partials: text-input/with input-container, input-validation/, default-button,

10. Import HTTP client module in app.module.ts and connect OrganizationService and UserService to backend
11. Add ngx-toastr

- import module
- import browser animation
- add stules in angular.json

## Backend - Express.js + Mongoose

1. Connect To Backend
<!-- Here the description will be more detailed ;) -->

- Create backend folder
- npm init
- npm install typescript
- Create tsconfig.json
- Create .gitignore
- Copy data.ts to backend/src
- npm install express cors
- Create server.ts
- install @types
- Add Apis
- npm install nodemon ts-node --save-dev
- Add urls.ts to frontend
- Add HttpClient module
- Update organization service
- routing
- login

2. Connect Login API To MongoDB Atlas

- Moving Apis into routers
- Create MongoDB Atlas
- Create .env file
- Install
- mongoose
- dotenv
- bcryptjs
- express-async-handler
- Use MongoDB instead of data.ts in apis
