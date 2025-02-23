import React, { useState } from 'react';
import { Container, MainContent, Title, AgendaCard, CalendarWrapper } from './Agenda.styles';
import Navbar from '../../components/Navbar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import AgendamentoModal from './modals/SchedulingModal';
import EventModal from './modals/EventModal';
import ConfirmationModal from './modals/ConfirmationModal';

const Agenda = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    {
      id: '1',
      title: 'Consulta - Maria Silva',
      start: '2023-10-25T09:00:00',
      end: '2023-10-25T10:00:00',
      backgroundColor: '#3498db'
    },
    {
      id: '2',
      title: 'Consulta - João Santos',
      start: '2023-10-25T14:00:00',
      end: '2023-10-25T15:00:00',
      backgroundColor: '#3498db'
    }
  ]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const handleDateSelect = (selectInfo) => {
    setSelectedDate(selectInfo);
    setIsModalOpen(true);
  };

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setIsEventModalOpen(true);
  };

  const handleAddAgendamento = (newEvent) => {
    setEvents([...events, {
      ...newEvent,
      id: String(events.length + 1),
      backgroundColor: '#3498db'
    }]);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(null);
    setIsEventModalOpen(false);
    setSelectedDate({ start: event.start });
    setIsModalOpen(true);
  };

  const handleCompleteEvent = (event) => {
    setEvents(events.map(evt => 
      evt.id === event.id 
        ? { 
            ...evt, 
            backgroundColor: '#27ae60',
            extendedProps: { 
              ...evt.extendedProps, 
              status: evt.extendedProps?.status === 'completed' ? 'pending' : 'completed' 
            }
          }
        : evt
    ));
    setIsEventModalOpen(false);
  };

  const handleDeleteEvent = (event) => {
    setEventToDelete(event);
    setIsConfirmModalOpen(true);
    setIsEventModalOpen(false);
  };

  const confirmDelete = () => {
    if (eventToDelete) {
      setEvents(events.filter(evt => evt.id !== eventToDelete.id));
      setEventToDelete(null);
      setIsConfirmModalOpen(false);
    }
  };

  return (
    <Container>
      <Navbar />
      <MainContent>
        <AgendaCard>
          <Title>Agenda de Consultas</Title>
          <CalendarWrapper>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              initialView="dayGridMonth"
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              events={events}
              select={handleDateSelect}
              eventClick={handleEventClick}
              locale={ptBrLocale}
              slotMinTime="08:00:00"
              slotMaxTime="19:00:00"
              allDaySlot={false}
              slotDuration="01:00:00"
              businessHours={{
                daysOfWeek: [1, 2, 3, 4, 5],
                startTime: '08:00',
                endTime: '19:00',
              }}
            />
          </CalendarWrapper>
        </AgendaCard>
      </MainContent>
      <AgendamentoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddAgendamento}
        selectedDate={selectedDate}
      />
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        event={selectedEvent}
        onEdit={handleEditEvent}
        onComplete={handleCompleteEvent}
        onDelete={handleDeleteEvent}
      />
      <ConfirmationModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmDelete}
        title="Confirmar Exclusão"
        message="Tem certeza que deseja excluir este agendamento? Esta ação não poderá ser desfeita."
      />
    </Container>
  );
};

export default Agenda;
