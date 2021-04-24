import s from "./Ticket.module.css";

function convertTime(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + "ч " + minutes + "м";
}

function getStartDate(date) {
  const startDate = new Date(date);
  return `${startDate.getHours()}:${startDate.getMinutes()}`;
}

function getEndDate(date, duration) {
  const startDate = new Date(date).getTime();
  const endDate = new Date(startDate + duration);
  return `${endDate.getHours()}:${endDate.getMinutes()}`;
}

function formatPrice(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function formatStopsTitle(stopsLength) {
  return stopsLength > 1
    ? `${stopsLength} пересадки`
    : `${stopsLength === 1 ? `1 пересадка` : "Без пересадок"}`;
}

function formatStopsData(stops) {
  return stops.map((stop, _, stops) => {
    if (stops.indexOf(stop) === stops.length - 1) {
      return `${stop}`;
    }
    return `${stop}, `;
  });
}

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <article className={s.ticket}>
      <p className={s.price}>{formatPrice(price)} P</p>

      <img
        src={`//pics.avs.io/99/36/${carrier}.png`}
        className={s.logo}
        alt="S7"
      />

      {segments.map((segment) => (
        <div
          className={s.segment}
          key={`${segment.origin} ${segment.destination}`}
        >
          <div className="segmentCites">
            <h3 className={s.segmentTitle}>
              <span>{segment.origin}</span> - <span>{segment.destination}</span>
            </h3>
            <p className={s.segmentData}>
              <span>{getStartDate(segment.date)}</span> -{" "}
              <span>{getEndDate(segment.date, segment.duration)}</span>
            </p>
          </div>
          <div className="segmentDuration">
            <h3 className={s.segmentTitle}>В пути</h3>
            <p className={s.segmentData}>{convertTime(segment.duration)}</p>
          </div>
          <div className={s.segmentStops}>
            <h3 className={s.segmentTitle}>
              {formatStopsTitle(segment.stops.length)}
            </h3>
            <p className={s.segmentData}>{formatStopsData(segment.stops)}</p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Ticket;
