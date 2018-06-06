const moment = require('moment');
const _ = require('lodash');
const chalk = require('chalk');

const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const LEVEL_MAX_LENGTH = 5;

class Logger {
    constructor(name) {
        this.name = name;
    }

    format(level, message) {
        const date = moment().format(DATE_FORMAT);
        const levelName = _.padEnd(level.toUpperCase(), LEVEL_MAX_LENGTH);
        return `[${date}] ${levelName} - ${this.name}: ${message}`;
    }

    log(message) {
        console.info(chalk.green(this.format('info', message))); // eslint-disable-line no-console
    }

    debug(message) {
        console.info(chalk.black(this.format('debug', message))); // eslint-disable-line no-console
    }

    error(message) {
        console.error(chalk.red(this.format('error', message))); // eslint-disable-line no-console
    }
}

module.exports = Logger;
