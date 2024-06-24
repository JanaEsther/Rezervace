import './hotel.css';

export const Hotel = () => {
  return (
    <div className="summary__head">
      <h1>Booking Summary</h1>
      <div className="summary__body">
        <img
          className="summary__photo"
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"
          alt="Hotel Lesní Zátiší"
        />
        <div className="summary__head-property">
          <h3 className="summary__name summary__name__color">
            Hotel Lesní Zátiší ***
          </h3>
          <div>
            <h3 className="summary__adresa">Adresa:</h3>
            <div className="summary__adress">Malohradské skály 347/21</div>
            <div className="summary__city">Malohradská Ves</div>
            <div className="summary__rating">Hodnocení: 4.65</div>
          </div>
          <div className="summary__head-room">
            <h3 className="summary__name summary__pokoj">Pokoj 2</h3>
            <div className="summary__room-type">
              Dvoulůžkový s dětskou přistýlkou
            </div>
            <div className="summary__room-price"> Cena: 1 800 Kč / noc</div>
          </div>
        </div>
      </div>
    </div>
  );
};
