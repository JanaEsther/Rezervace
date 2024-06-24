import './rezervation.css';

export const Rezervation = () => {
  return (
    <div className="summary__detail">
      <h3>Detail rezervace</h3>
      <div className="summary__number">Číslo: 459787-745</div>
      <div className="summary__dates">Pobyt: 13.7.2024 - 17.7.2024</div>
      <div className="summary__guests">Hosté: 2 dospělí, 1 dítě</div>
      <div className="summary__services">Stravování: žádné</div>
      <div className="summary__room-total">Cena celkem:7 200 Kč</div>
      <div className="summary__check-in">Check-in: 13.7.2024 do 18:00</div>
      <div className="summary__check-out">Check-out: 17.7.2024 do 10:00</div>
    </div>
  );
};
