import React from 'react';
import { Link } from 'react-router-dom';

const SessionCard = ({ session, onDelete }) => {
  return (
    <div className="session-card">
      <div className="session-info">
        <h3>{session.title}</h3>
        <div className="session-tags">
          <span className={`badge badge-${session.topic.toLowerCase()}`}>
            {session.topic}
          </span>
          <span>{session.hours} {session.hours === 1 ? 'hour' : 'hours'}</span>
          <span className="status-text">
            {session.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
      <div className="session-actions">
        <Link to={`/sessions/${session._id}/edit`} className="btn-edit">
          Edit
        </Link>
        <button onClick={() => onDelete(session._id)} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default SessionCard;