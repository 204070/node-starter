import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { v1Router } from './api/v1';
import logger, { stream } from '../../core/Logger';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
	morgan(
		`:remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms ":referrer" ":user-agent"`,
		{ stream }
	)
);

app.use('/api/v1', v1Router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	logger.info(`Example app listening at http://localhost:${port}`);
});
