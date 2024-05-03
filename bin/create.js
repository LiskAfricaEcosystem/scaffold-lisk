const inquirer = require("inquirer");
const shell = require("shelljs");
const chalk = require("chalk");
const ora = require("ora");
const emoji = require("node-emoji");
const { ensureDir, readdir } = require("fs-extra");
const Os = require("os");
const { join } = require("path");
const fs = require("fs");

const createAsync = async () => {
  let { projectName } = await inquirer.prompt({
    type: "input",
    name: "projectName",
    message: "Project name: ",
  });

  const pwd = process.cwd();
  shell.cd(pwd);
  shell.exec(`git clone https://github.com/LiskAfricaEcosystem/scaffold-lisk.git ${projectName}`);
  shell.cd(projectName);
  const packageJsonPath = join(pwd, projectName, "package.json");
  fs.readFile(packageJsonPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    // Parse the JSON data
    const packageData = JSON.parse(data);

    // Modify the "name" field
    packageData.name = projectName; // Replace 'new-name' with your desired name

    // Convert the JSON data back to a string
    const updatedData = JSON.stringify(packageData, null, 2);

    // Write the updated data back to the package.json file
    fs.writeFile(packageJsonPath, updatedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return;
      }
    });
  });

  console.log(chalk.yellow("\n\nRemember to change the git url using the command: git remote set-url origin new.git.url/here\n"));

  console.log(chalk.green("🚀 Your Lisk starter project has been successfully created!\n"));

  console.log("Now you're all set to start your project!\n");
  console.log(chalk.green("Run `yarn install` and `yarn dev` from packages/react folder to start the project\n"));

  console.log(chalk.green("Run `yarn install` from packages/hardhat install dependencies\n"));

  console.log(chalk.green("Thank you for using Lisk Scaffold!") + "If you have any questions or need further assistance, please refer to the README or reach out to our team.\n");

  console.log(chalk.blue("Happy coding! 🎉\n\n"));

  return;
};

module.exports = {
  createAsync,
};
