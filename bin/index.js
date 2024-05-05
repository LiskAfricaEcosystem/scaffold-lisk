#! /usr/bin/env node
console.log("Create a simple Lisk Dapp Scaffold");
const commander = require("commander");
const { createAsync } = require("./create.js");

const program = new commander.Command();

let stdin = {
  stdin: "",
};

program
.command("create")
.option("-t, --template <name>", "Specify a template to use for the project")
.option("-f, --force", "Force project creation even if the output directory is not empty")
.description("Generate a new Lisk project")
.action(createAsync);

program.on("--help", () => {
  console.log("");
  console.log("Examples:");
  console.log("  $ lisk-scaffold-dapp create");
  console.log("  $ lisk-scaffold-dapp create --template my-template");
});

if (process.stdin.isTTY) {
  program.parse(process.argv);
} else {
  process.stdin.on("readable", function () {
    let chunk = this.read();
    if (chunk !== null) {
      stdin.stdin += chunk;
    }
  });
  process.stdin.on("end", () => program.parse(process.argv));
}

process.on("uncaughtException", (err) => {
  if (err.code === "EADDRINUSE") {
    // console.log('Port already in use');
    return;
  } else if (err.message.includes("Timed out while waiting for handshake")) {
    // console.log('Ignoring timeout error');
    return;
  } else if (err.message.includes("Could not resolve")) {
    // console.log('Ignoring DNS Resolution error');
    return;
  } else {
    console.log("Unhandled exception. Shutting down", err);
  }
  process.exit(1);
});
