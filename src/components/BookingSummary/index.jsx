import { Hotel } from '../Hotel';
import { Rezervation } from '../Rezervation';
import { Services } from '../Services';
import { Storno } from '../Storno';

export const BookingSummary = () => {
  return (
    <div className="summary">
      <Hotel />
      <Rezervation />
      <Services />
      <Storno / >

    </div>
  );
};





