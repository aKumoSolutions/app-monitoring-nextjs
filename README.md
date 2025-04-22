# API Monitoring SaaS

This repository contains the source code for an API monitoring SaaS application built with the Next.js framework. The service enables clients to create and manage API status pages for continuous monitoring of their APIs.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Frontend on AWS EC2 (Amazon Linux 2023)](#frontend-on-aws-ec2-amazon-linux-2023)
  - [Frontend on Local Machine](#frontend-on-local-machine)
- [Linting](#linting)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow the steps below to set up the application on your local machine or cloud server.

## Installation

Ensure that you have **Node.js** and **npm** installed on your system. You can download and install them from [here](https://nodejs.org/).

## Running the Application

You can run the API monitoring application either on an **AWS EC2 instance** or on your **local machine**.

## Frontend on AWS EC2 (Amazon Linux 2023)

1. **Prepare the Environment**  
   Ensure you have an EC2 instance running Amazon Linux 2023 with SSH access.

2. **Run the Setup Script**  
   The repository contains a `setup.sh` script to help you install Node.js and npm. Run the script with the following command:

   ```bash
   bash scripts/setup.sh

   ```

3. **Install Project Dependencies**
   After running the setup script, install the necessary dependencies:

   ```bash
   npm install

   ```

4. **Update .env file**
   Open the .env file and update the values with Backend URL or IP address (if you skipped Step 2)

   ```bash
   BACKEND_URL="192.168.1.0:8000"
   ```

5. **Build the Project for Production**
   Build the project in preparation for production:

   ```bash
   npm run build

   ```

6. **Start the Production Server**
   Once the build is complete, you can start the production server:

   ```bash
   npm run start
   ```

## For Local Development

Start the development server with:

```sh
npm run dev
```

### Linting

A custom linting script is available, which uses **Prettier** for code formatting. To check and automatically format code:

```sh
npm run lint
```

This runs:

```sh
prettier --check --write .
```

## Project Structure

```
/project-root
  ├── public/          # Static assets
  ├── app/             # Next.js App Router (Server Components, Layouts, Pages)
  ├── components/      # Reusable UI components
  ├── styles/         # Global styles
  ├── scripts/        # Utility scripts (e.g., setup.sh)
  ├── package.json     # Project dependencies
  |── next.config.ts   # Project config file
  ├── README.md        # Project documentation
```

## Contributing

We welcome contributions to improve this project. Please follow the standard Git workflow:

1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit changes
4. Push the branch and submit a PR

## License

This project is licensed under the MIT License.

```

```
