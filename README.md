# QUADBTECH

## Overview

This react app fetches data from api in json format and displays it to user. This very project is a simple TV show directory.

## Installation

### Prerequisites

Before you begin, ensure that you have the following tools and technologies installed on your machine:

- [Node.js](https://nodejs.org/en/) : Make sure to install the latest LTS version of Node.js.
- [npm](https://www.npmjs.com/) : The Node.js package manager. It is included with Node.js installation.

You can check if you have Node.js and npm installed by running the following commands in your terminal:

```bash
node --version
npm --version
```

If either of the commands does not return a version number, you need to install Node.js and npm before proceeding.

### Instructions

Step-by-step instructions on how to install and set up the project locally.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/itsrealkaran/quadbtech.git
   ```

1. **Navigate to the project directory:**

   ```
   bash
   Copy code
   cd your-project
   ```

1. **Install dependencies:**

   ```
   bash
   Copy code
   npm install
   ```

1. **Run the application:**

   ```
   bash
   Copy code
   npm start
   ```

The application will be accessible at http://localhost:3000.

## Assumptions

There are few assumptions made:

- Only the API endpoint with search result of `all` as query is used(provided API end point)
- For missing images a default placeholder image will be loaded.
- For API results without review `N/A` will be returned.
- `Medium` image is used for catalog and `Orignal` image is used for summary.

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

#### Made with ❤️ by [Karan Singh](https://linkedin.com/in/itsrealkaran)
