class ScheduleOrderDTO {
    constructor(id, apartmentId, userId, title, start, end, description, recurrenceRule, recurrenceException, isAllDay, status) {
        this.id = id;
        this.apartmentId = apartmentId;
        this.userId = userId;
        this.title = title;
        this.start = new Date(start).toISOString();
        this.end = end ? new Date(end).toISOString() : null;
        this.description = description;
        this.recurrenceRule = recurrenceRule;
        this.recurrenceException = recurrenceException;
        this.isAllDay = isAllDay;
        this.status = status;
    }
}

export default ScheduleOrderDTO;
