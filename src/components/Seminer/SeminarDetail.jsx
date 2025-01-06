import React from 'react';
import { Dialog } from '@headlessui/react';
import { CalendarIcon, XIcon, Clock } from 'lucide-react';

import './SeminerDetails.css'

const SeminarDetail = ({ isOpen, onClose, seminarData }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="hi-dialog-wrapper"
    >
      <div className="hi-dialog-backdrop" aria-hidden="true" />

      <div className="hi-dialog-container">
        <Dialog.Panel className="hi-dialog-panel">
          <div className="hi-dialog-header">
            <div className="hi-left-section">
              <div className="hi-calendar-icon">
                <CalendarIcon size={24} />
              </div>
              <div className="hi-seminar-number">Seminer {seminarData.number}</div>
              <Dialog.Title className="hi-seminar-title-main">
                {seminarData.title}
              </Dialog.Title>
            </div>
            <div className="hi-dialog-actions">
              <a href='https://workspace.google.com/intl/tr/products/calendar/' className="hi-add-calendar-btn">
                Takvime Ekle
              </a>
              <button
                className="hi-close-btn"
                onClick={onClose}
              >
                <XIcon size={20} />
              </button>
            </div>
          </div>

          <div className="hi-seminar-detail-content">
            <div className="hi-sessions-section">
              {seminarData.sessions.map((session, index) => (
                <div key={index} className="hi-session-card">
                  <div className="hi-session-header">
                    <span className="hi-session-number">{session.number}. Oturum</span>
                    <h3 className="hi-session-title">{session.title}</h3>
                    <div className="hi-session-speaker">({session.speaker})</div>
                  </div>
                  <div className="hi-session-dates">
                    <div className="hi-date">
                      <CalendarIcon size={16} />
                      <span>{session.startDate}</span>
                    </div>
                    <div className="hi-date">
                      <Clock size={16} />
                      <span>{session.endDate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hi-modal-speakers-section">
              {seminarData.speakers.map((speaker, index) => (
                <div key={index} className="hi-modal-speaker-card">
                  <div className="hi-modal-speaker-image-container">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="hi-modal-speaker-image"
                    />
                    <div className="hi-modal-speaker-info">
                      <h4 className="hi-modal-speaker-name">{speaker.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default SeminarDetail;