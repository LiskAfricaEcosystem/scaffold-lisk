const { exec } = require("child_process");
const ora = require("ora");
const path = require("path");

const deployToVercel = async () => {
  const spinner = ora("Deploying to Vercel...").start();
  
  // Change directory to react-app
  const appDirectory = path.join(__dirname, "..", "packages", "react-app");

  try {
    process.chdir(appDirectory);
    console.log(`Changed directory to ${appDirectory}`);

    exec("vercel", (error, stdout, stderr) => {
      if (error) {
        spinner.fail("Failed to deploy to Vercel.");
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        spinner.fail("Failed to deploy to Vercel.");
        console.error(`stderr: ${stderr}`);
        return;
      }
      spinner.succeed("Successfully deployed to Vercel.");
      console.log(`stdout: ${stdout}`);
    });
  } catch (err) {
    spinner.fail("Failed to change directory.");
    console.error(`Error: ${err.message}`);
  }
};

module.exports = {
  deployToVercel,
};
