<!-- Title -->
# Lisk Scaffold

## Version 0.0.4

### Overview

🧪 **Lisk Scaffold DApp** is an open-source, robust framework designed to accelerate the development and deployment of decentralized applications (DApps) on the Lisk platform. It equips developers with essential tools and frameworks, making the initial steps of building a DApp straightforward and efficient.

<!-- Getting Started -->

### Getting Started

#### Prerequisites

- [Node.js (>= v10.x) or higher](https://nodejs.org/en/download)
- [Yarn]([v1]((https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install)))
- [Git](https://git-scm.com/downloads)

<!-- Installation Guide -->

#### Installation

You can quickly set up a new project using the command below:

```bash
npx lisk-scaffold-dapp@latest create

```

<!-- Frameworks Available -->

## Key Components

The following components are available in this scaffolding tool:

- **Frontend Framework:** Next.js
  - Wagmi
  - Viem
  - RainbowKit
  - Typescript
- **Backend Framework:** Hardhat
  - Javascript

<!--  Usage Examples -->

## Usage

Follow these steps to create and configure your DApp project:

1. **Select Front-End and Smart Contract Frameworks:** During setup, you'll choose from available frameworks like React for the frontend and Hardhat for smart contracts.
2. **Project Configuration:** Provide a project name, which will be used to set up the directory structure.
3. **Customization and Setup:** The tool automatically clones necessary components and configures your project based on the selections.
4. **Finalization:** Once setup is complete, essential information and next steps are displayed, ensuring you are ready to begin development immediately.

<!-- Config  -->

## Advanced Configuration

Generated projects include a `package.json` with metadata relevant to your DApp, which can be customized further. Configuration files for different packages are tailored during the setup to match project specifications.

<!-- Support and Contribution -->

## Support and Contribution

For issues, suggestions, or contributions, please visit our GitHub repository.

## Additional Notes

- If your project setup does not involve web development, modifications like `netlify.toml` might be unnecessary.
- Projects such as those developed with Flutter might not utilize a `package.json`.

## License

This project is licensed under the MIT License.

## Maintainers

- @Jordan-type
- @Ronexlemon
- @anthonykimani

<!-- Badges -->

## Using the CLI

- additionally you can scaffold a project easily by using the command `npx lisk-scaffold-dapp@latest create`
- `npx lisk-scaffold-dapp`

<!-- 
  "scripts": {
    "react-app:dev": "yarn workspace @scaffold-lisk/react-app dev",
    "react-app:build": "yarn workspace @scaffold-lisk/react-app build",
    "react-app:start": "yarn workspace @scaffold-lisk/react-app start",
    "react-app:lint": "yarn workspace @scaffold-lisk/react-app lint",
    "hardhat:compile": "yarn workspace @scaffold-lisk/hardhat compile"
  }, -->