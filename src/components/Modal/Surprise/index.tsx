import React, { Fragment, useState } from 'react';
import Paperboat from '../../../assets/wired-lineal-1534-paper-boat.gif';
import Plant from '../../../assets/wired-lineal-1827-growing-plant.gif';
import Dandelion from '../../../assets/wired-lineal-1822-dandelion.gif';
import Icon from '../../../assets/WhatsApp Image 2023-05-09 at 18.22.33.jpeg';

import './style.css';

interface IProps {
  visible: boolean;
  hide: () => void;
};

function SurpriseModal(props: IProps): JSX.Element {
  const [display, setDisplay] = React.useState<string>('none');

  const handleDisplay = () => {
    setDisplay('none');
    props.hide();
  }

  React.useEffect(() => {
    if (props.visible) {
      setDisplay('block');
    }
  }, [props.visible]);


  return (
    <div
      style={{
        display: display,
        position: 'fixed',
        zIndex: 22,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(60,64,67, 0.3)',
      }}
      onClick={handleDisplay}
    >
      <div className="modal-content">
        <div className="modal-div-img">
          <img src={Dandelion} alt="Dandelion" className="modal-img" />

          <img src={Icon} alt="Te amo" className="modal-img2" />

          <div className="modal-div2-img">
            <img src={Paperboat} alt="Paperboat" className="modal-img" />
            <img src={Plant} alt="Plant" className="modal-img" />
          </div>
        </div>
        <div className="modal-text-div">
          <p className="modal-text">
            "here is the deepest secret nobody knows
            (here is the root of the root and the bud of the bud
            and the sky of the sky of a tree called life;which grows
            higher than soul can hope or mind can hide)
            and this is the wonder that's keeping the stars apart

            i carry your heart(i carry it in my heart)"
          </p>
        </div>
      </div>

    </div>
  );
}

export default SurpriseModal;
