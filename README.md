# API Monitoring SaaS

This repository contains the source code for an API monitoring SaaS application built with the Next.js framework. This service enables clients to set up and manage API status pages for 24/7 monitoring.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To run this application locally, follow the steps outlined below.

## Installation

Before proceeding, ensure you have **Node.js** and **npm** installed on your system. To simplify setup, a script (`setup.sh`) is provided in the repository.

Run the setup script to install Node.js and npm:

```sh
bash scripts/setup.sh
```

After running the setup script, install project dependencies:

```sh
npm install
```

## Available Scripts

### Build for Production on AWS EC2 instance

To build the project for production:

```sh
npm run build
```

### Start the Production Server

After building, start the production server with:

```sh
npm run start
```


### For Local Development

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
