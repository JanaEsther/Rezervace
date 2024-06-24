import './services.css';

export const Services = (props) => {
  return (
    <div className="summary__services">
      <h3>Doplňkové služby</h3>
      <div className="summary__service">Parkování: 200 Kč / noc</div>
      <div className="summary__service">Snídaně: 150 Kč / noc</div>
      <div className="summary__service">Večeře: 250 Kč / noc</div>
      <div className="summary__service">Wellness: Zdarma</div>
      <div className="summary__service">Wifi: Zdarma na všech pokojích</div>
    </div>
  );
};
