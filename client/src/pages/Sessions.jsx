import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessions, addSession, deleteSession } from '../features/sessions/sessionsSlice';
import SessionCard from '../components/SessionCard';

const Sessions = () => {
  const dispatch = useDispatch();
  const { items: sessions, status, error } = useSelector((state) => state.sessions);

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('React');
  const [hours, setHours] = useState(1);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchSessions());
    }
  }, [status, dispatch]);

  const isTitleValid = title.trim().length >= 3;

  const handleAddSession = (e) => {
    e.preventDefault();
    if (!isTitleValid) return;

    dispatch(addSession({ title, topic, hours: Number(hours) }));
    setTitle('');
    setTopic('React');
    setHours(1);
  };

  const handleDelete = (id) => {
    dispatch(deleteSession(id));
  };

  return (
    <div className="container">
      <h2>My Sessions</h2>

      <form className="add-form" onSubmit={handleAddSession}>
        <input
          type="text"
          placeholder="Session Title (min 3 chars)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="Database">Database</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          min="1"
          max="24"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <button type="submit" disabled={!isTitleValid} className="btn-primary">
          Add
        </button>
      </form>

      {status === 'loading' && <div className="loading">Loading...</div>}
      {status === 'failed' && <div className="error-message">{error}</div>}

      {status === 'succeeded' && (
        <div className="sessions-list">
          {sessions.map((session) => (
            <SessionCard key={session._id} session={session} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sessions;