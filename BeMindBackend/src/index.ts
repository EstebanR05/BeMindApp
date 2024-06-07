import express from 'express';
import TaskRoute from './routes/TaskRoute';

const app = express();
const _PORT = 3000;

app.use(express.json());
app.use('/Api/', TaskRoute);

app.listen(_PORT, () => {
    console.log(`Server running on port: http://localhost:${_PORT}/Api`);
});