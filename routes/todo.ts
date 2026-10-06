import express from 'express';
import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from '../data.js';

const router = express.Router();

router.post('/todos', (req, res) => {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.json({ message: "Todo added!", todo: addedTodo });
});

router.get('/todos', (req, res) => {
    const todos = getTodos();
    res.json({ todos });
});

router.get('/todo/:id', (req, res) => {
    const todo = getTodo(+req.params.id);
    res.json({ todo });
})

router.patch('/todo/:id', (req, res) => {
    const updatedTodo = updateTodo(+req.params.id, req.body.next);
    res.json({ message: 'Todo updated', todo: updatedTodo})
});

router.delete('/todo/:id', (req, res) => {
    removeTodo(+req.params.id);
    res.json({ message: 'Todo deleted!'});
});

export default router;