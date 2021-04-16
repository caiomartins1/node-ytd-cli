const fs = require('fs');
const ytdl = require('ytdl-core');
const chalk = require('chalk');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ytVideoInfo = {};
const usageString = 'Usage: node index.js <video url> <Optional: file name> <Optional: path to save>';
console.log(chalk.bgWhite(chalk.black("Welcome to YTD-CLI")));


rl.question(chalk.red('Enter the Youtube Video URL: \n'), (answer) => {

  const trimedAnswer = answer.trim();
  
  if (trimedAnswer) {
    ytVideoInfo['videoUrl'] = trimedAnswer;
  } else {
    console.log(chalk.bgRed(chalk.black('URL Needed!')));
    process.exit(1);
  }

  rl.close();
});