import chalk from "chalk";
import { APP_VERSION } from "../version.js";

// Get the version from package.json dynamically
export const getVersion = () => {
  return `create-node-app v${APP_VERSION}`;
};

// Display help information
export const showHelp = () => {
  console.log(
    chalk.yellow(`
Usage: create-node-app [project-name] [options]

Options:
  -v, --version          Show CLI version
  -h, --help             Display help for the CLI tool
`)
  );
};
