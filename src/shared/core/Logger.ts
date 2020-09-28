import { createLogger, transports, format } from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const { combine, timestamp, prettyPrint, json } = format;

// define the custom settings for each transport (file, console, es)
const options = {
	file: {
		level: 'error',
		filename: `./logs/error.log`,
		json: true,
		maxsize: 5242880, // 5MB
		maxFiles: 5,
		colorize: false,
		format: combine(timestamp(), json()),
	},
	console: {
		level: 'debug',
		handleExceptions: true,
		json: false,
		colorize: true,
		format: combine(timestamp(), prettyPrint()),
	},
	es: {
		level: 'info',
		format: json(),
		clientOpts: { node: 'http://nodestarter-es:9200' },
	},
};

const logger = createLogger({
	transports: [new transports.File(options.file), new ElasticsearchTransport(options.es)],
	exceptionHandlers: [new transports.File({ filename: './logs/exceptions.log' })],
	exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(new transports.Console(options.console));
}

// create a stream object with a 'write' function that will be used by `morgan`
export const stream = {
	write(message: any): void {
		// use the 'info' log level so the output will be picked up by both transports (es and console)
		logger.info(message);
	},
};

export default logger;
