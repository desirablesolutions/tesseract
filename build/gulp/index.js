var child_process = require('child_process');
var exec = child_process.exec;

var util = require('util');
var promisify = util.promisify;

var gulp = require('gulp');

var chalk = require('chalk');



gulp.task('readme', async () => {

  const execAsync = promisify(exec);

  console.log(chalk.blue('Generating README'));

  const { stdout, stderr } = await execAsync('@appnest/readme generate --docs=config.doc.json');

  console.log(stdout);
  console.error(stderr);
});

gulp.task('default', gulp.series('readme'));
