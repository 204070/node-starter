import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import { v1Router } from './api/v1';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use('/api/v1', v1Router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
