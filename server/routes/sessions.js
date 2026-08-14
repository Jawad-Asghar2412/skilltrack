import express from 'express';
import Session from '../models/Session.js';

const router = express.Router();

// GET /api/sessions - Get all sessions
router.get('/', async (req, res, next) => {
  try {
    const sessions = await Session.find({});
    res.status(200).json(sessions);
  } catch (error) {
    next(error);
  }
});

// GET /api/sessions/:id - Get single session by ID
router.get('/:id', async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      res.status(404);
      throw new Error('Session not found');
    }
    res.status(200).json(session);
  } catch (error) {
    next(error);
  }
});

// POST /api/sessions - Create new session
router.post('/', async (req, res, next) => {
  try {
    const { title, topic, hours, notes, completed } = req.body;
    
    if (title && title.trim().length < 3) {
      res.status(400);
      throw new Error('Title must be at least 3 characters long');
    }

    const session = new Session({ title, topic, hours, notes, completed });
    const createdSession = await session.save();
    res.status(201).json(createdSession);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400);
    }
    next(error);
  }
});

// PUT /api/sessions/:id - Update session
router.put('/:id', async (req, res, next) => {
  try {
    const { title, topic, hours, notes, completed } = req.body;

    if (title && title.trim().length < 3) {
      res.status(400);
      throw new Error('Title must be at least 3 characters long');
    }

    const session = await Session.findById(req.params.id);
    if (!session) {
      res.status(404);
      throw new Error('Session not found');
    }

    session.title = title !== undefined ? title : session.title;
    session.topic = topic !== undefined ? topic : session.topic;
    session.hours = hours !== undefined ? hours : session.hours;
    session.notes = notes !== undefined ? notes : session.notes;
    session.completed = completed !== undefined ? completed : session.completed;

    const updatedSession = await session.save();
    res.status(200).json(updatedSession);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400);
    }
    next(error);
  }
});

// DELETE /api/sessions/:id - Delete session
router.delete('/:id', async (req, res, next) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      res.status(404);
      throw new Error('Session not found');
    }
    await session.deleteOne();
    res.status(200).json({ message: 'Session deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;