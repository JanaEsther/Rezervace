import './storno.css';

export const Storno = () => {
  return (
    <div className="summary__cancel">
      <h3 className="summary__storno__title">Storno podmínky</h3>
      <div className="summary__cancel-text">
        <p>
          Pokud zrušíte rezervaci do 14 dní před příjezdem, nebude Vám účtována
          žádná částka.
        </p>
        <p>
          Pokud zrušíte rezervaci později nebo nedorazíte vůbec, bude Vám
          účtována částka za první noc pobytu.
        </p>
      </div>
    </div>
  );
};
