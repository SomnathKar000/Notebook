# Notebook Website

The Notebook Website is a MERN stack project that allows users to upload, delete, and update their personal notes, as well as search for notes by the title. It provides a user-friendly interface using Bootstrap for styling. The project utilizes the following technologies:

## Home Page
![Home page](https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/245466643-93d33d4f-cb37-4d12-9a11-b7d114134e54.png)
## Sign up Page
![Sign up Page](https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/245466743-d7a47818-570a-485d-9fd5-7e44ea5a9b7a.png)
## Login Page
![Login Page](https://github-production-user-asset-6210df.s3.amazonaws.com/108184610/245466731-06c9edc3-fb44-4f2d-8989-28a753085a60.png)

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for managing navigation within the application.
- MongoDB: A NoSQL database for storing note data.
- Express.js: A web application framework for building the backend API.
- Node.js: A JavaScript runtime environment for server-side development.
- JSON Web Tokens (JWT): A token-based authentication mechanism for securing user access.
- bcryptjs: A library for encrypting and decrypting user data.

## Demo

Check out the live demo of the website: [Notebook Website](https://notebook-somnath000.vercel.app/)

## Installation

To run the website locally, follow these steps:

1. Clone the repository: `https://github.com/SomnathKar000/Notebook`
2. Navigate to the Backend directory: `cd Backend`
3. Install Backend dependencies: `npm install`
4. Return to the root directory: `cd ..`
5. Install root directory dependencies: `npm install`

Make sure to set up the following environment variables:

- Create a `.env` file in the root directory of the project.
- Define the following environment variables in the `.env` file:
  - `DB_URI=<your-mongodb-uri>`: The MongoDB connection URI
  - `JWT_SECRET=<your-jwt-secret>`: The secret key used for JWT authentication

## Usage

1. Start both servers: `npm run both`
2. Open the application in your browser: `http://localhost:3000`

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add your message here'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

Please make sure to run tests before submitting your pull request and adhere to the code style guidelines.

## Contact

For more information or questions, feel free to reach out:

- Email: somnathkar2023@gmail.com
- LinkedIn: [Somnath Kar](https://www.linkedin.com/in/somnath-kar-aa73aa1a3)
- GitHub: [SomnathKar000](https://github.com/SomnathKar000)
