import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);

const getDeliveryDates = () => {
  const weekendHours = [
    { start: '10:00', end: '12:00' },
    { start: '12:00', end: '14:00' },
    { start: '14:00', end: '16:00' },
    { start: '18:00', end: '20:00' },
  ];

  const weekdayHours = [
    { start: '10:00', end: '12:00' },
    { start: '12:00', end: '14:00' },
    { start: '14:00', end: '16:00' },
    { start: '18:00', end: '20:00' },
    { start: '20:00', end: '22:00' },
  ];

  const day = dayjs().date();
  const today = dayjs().date(day);
  const tomorrow = dayjs().date(day + 1);
  const dayAfterTomorrow = dayjs().date(day + 2);

  const saturday = dayjs().weekday(6).format('dddd');
  const sunday = dayjs().weekday(7).format('dddd');

  let days = [];
  let intervals;
  let finalDays = [];
  days.push(today, tomorrow, dayAfterTomorrow);

  days.map((day) => {
    const formattedDay = day.format('dddd');

    if (formattedDay !== saturday || sunday) {
      intervals = weekdayHours;
    }

    if (formattedDay === saturday) {
      intervals = weekendHours;
    }

    if (formattedDay === sunday) {
      intervals = weekendHours;
    }

    const dayDetails = {
      date: day,
      intervals: intervals.filter((interval) => {
        if (day === today) {
          return Number(interval.start.substring(0, 2) > day.$H);
        } else {
          return interval;
        }
      }),
      name: formattedDay,
    };

    finalDays.push(dayDetails);
  });
  return finalDays;
};

export default getDeliveryDates;
