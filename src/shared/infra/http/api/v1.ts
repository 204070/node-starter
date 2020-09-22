import express from 'express';

const v1Router =  express.Router();

v1Router.get('/', (_req, res) => {
	return res.json({
		message: 'Welcome to the best Enterprise API in the world. Build with love by Seun.',
	});
});

export { v1Router };
