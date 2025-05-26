import inquirer from "inquirer";
import type { DistinctQuestion } from "inquirer";
import degit from "degit";
import { execa } from "execa";
import path from "path";
import fs from "fs";
import chalk from "chalk";
import figlet from "figlet";

type Answers = {
  projectName: string;
  packageManager: "npm" | "yarn" | "pnpm";
  gitInit: boolean;
  installDeps: boolean;
};

export default async function run(): Promise<void> {
  const rawArgs = process.argv.slice(2);
  const defaultProjectName = rawArgs[0];

  console.log(
    chalk.magenta(
      figlet.textSync("create-a12v-app", {
        font: "Standard",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );

  console.log(chalk.gray("Scaffold a Nuxt 3 + TypeScript app in seconds.\n"));

  const questions: Array<DistinctQuestion<Answers>> = [
    {
      type: "input",
      name: "projectName",
      message: "Project name:",
      default: defaultProjectName,
      validate: (input: string) =>
        input ? true : "Project name cannot be empty",
    },
    {
      name: "packageManager",
      type: "list",
      message: "Select a package manager:",
      choices: ["npm", "yarn", "pnpm"],
    },
    {
      name: "gitInit",
      type: "confirm",
      message: "Initialize a Git repository?",
      default: true,
    },
    {
      name: "installDeps",
      type: "confirm",
      message: "Install dependencies after setup?",
      default: true,
    },
  ];

  const answers = await inquirer.prompt<Answers>(questions);

  const { projectName, packageManager, gitInit, installDeps } = answers;
  const repo = "alexander-gekov/a12v-stack";

  const emitter = degit(repo, {
    cache: false,
    force: true,
    verbose: false,
  });

  console.log(chalk.cyan(`\n📦 Cloning starter repo into ${projectName}...`));

  try {
    await emitter.clone(projectName);
  } catch (err: any) {
    console.error(chalk.red("❌ Failed to clone template:"), err.message);
    process.exit(1);
  }

  if (gitInit) {
    console.log(chalk.cyan("🔧 Initializing Git..."));
    await execa("git", ["init"], { cwd: projectName });
    await execa("git", ["add", "."], { cwd: projectName });
    await execa("git", ["commit", "-m", "Initial commit"], {
      cwd: projectName,
    });
  }

  if (installDeps) {
    console.log(
      chalk.cyan(`📥 Installing dependencies with ${packageManager}...`)
    );
    await execa(packageManager, ["install"], {
      cwd: projectName,
      stdio: "inherit",
    });
  }

  console.log(chalk.green("\n✅ Done!"));
  console.log(`\n👉 cd ${projectName} && ${packageManager} run dev\n`);
}
