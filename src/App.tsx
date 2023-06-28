import React, { Fragment, useState } from 'react';
import Quote from './assets/wired-lineal-41-quotation-mark-second.gif';
import EditDocument from './assets/wired-lineal-245-edit-document.gif';
import Walk from './assets/wired-lineal-646-walking-walkcycle-person.gif';
import Pencil from './assets/wired-lineal-35-edit.gif';
import Clock from './assets/wired-lineal-236-alarm-clock.gif';
import Gift from './assets/wired-lineal-412-gift.gif';
import SurpriseModal from './components/Modal/Surprise';
import './App.css';

type FormElement = React.FormEvent<HTMLFormElement>;

interface IPath {
  title: string;
};
interface IDeadline {
  date: string;
};

function App(): JSX.Element {
  const [newPath, setNewPath] = useState<string>('');
  // const [paths, setPaths] = useState<IPath[]>([]);

  const [listOfPaths, setListOfPaths] = useState<IPath[]>([
    {
      title: 'El camino más rápido.'
    },
    {
      title: 'El camino más completo.'
    },
    {
      title: 'El camino de menos esfuerzo.'
    },
    {
      title: 'El camino hacia el reconocimiento.'
    },
    {
      title: 'El camino esperable.'
    },
    {
      title: 'El camino por el que se inclina más tu corazón.'
    },
    {
      title: 'El camino más polémico.'
    },
    {
      title: 'El camino más tradicional.'
    },
    {
      title: 'El camino más innovador.'
    },
    {
      title: 'El camino que seguiría Sol.'
    },
  ]);
  const [showPath, setShowPath] = useState<boolean>(false);
  const [pathToShow, setPathToShow] = useState<IPath>({
    title: ''
  });
  const [showDeadline, setShowDeadline] = useState<boolean>(false);
  const [listOfDeadlines, setListOfDeadlines] = useState<IDeadline[]>([
    {
      date: "1 semana"
    },
    {
      date: "10 días"
    },
    {
      date: "2 semanas"
    },
    {
      date: "1 mes"
    },
    {
      date: "2 meses"
    },
    {
      date: "3 días"
    },
    {
      date: "1 día"
    },
    {
      date: "6 horas"
    },
    {
      date: "3 semanas"
    }
  ]);
  const [deadlineToShow, setDeadlineToShow] = useState<IDeadline>({
    date: ''
  });

  const [visible, setVisible] = useState<boolean>(false);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addPath(newPath);
    setNewPath('');
  };

  const addPath = (title: string) => {
    const newPaths: IPath[] = [...listOfPaths, { title }];
    setListOfPaths(newPaths);
  }

  const handleChange = (e: string) => {
    setNewPath(e);
  };

  const handleSeePaths = () => {
    const length = listOfPaths.length;

    const id = Math.floor(Math.random() * length);

    setPathToShow(listOfPaths[id]);
    setShowPath(true);
  };

  const handleReset = (v: string) => {
    if (v === 'path') {
      setShowPath(false);
    } else if (v === 'date') {
      setShowDeadline(false);
    }
  };

  const handleSeeDeadline = () => {
    const length = listOfDeadlines.length;

    const id = Math.floor(Math.random() * length);

    setDeadlineToShow(listOfDeadlines[id]);
    setShowDeadline(true);
  };

  const handleSurprise = () => {
    setVisible(true);
  }

  const hideModal = () => {
    setVisible(false);
  }

  return (
    <div className="paper">
      <div className="pattern">
        <div className="content">

          {/* SORPRESA */}
          <div className="div-surprise" onClick={handleSurprise}>
            <img src={Gift} alt="gift" className="img-surprise" />
          </div>
          {/* DIV ABSOLUTE */}

          {/* MODAL SORPRESA */}
          <SurpriseModal visible={visible} hide={hideModal} />

          <img src={EditDocument} alt="edit-document" className="img-document" />
          <div className="typewriter-div">
            <div className="typewriter">
              Herramienta anti-procrastinación:
            </div>
          </div>
          <br />

          {/* BOTÓN PARA ELEGIR UN CAMINO */}
          <div>
            <div className="div-showPath">
              <img src={Walk} alt="walk" className="img-walk" />
              <p className="paragraph">¿Qué camino voy a seguir para encarar este proyecto?</p>
            </div>
            <br />
            <div className="button-1div">
              <button onClick={handleSeePaths} className="button-1">
                {showPath && pathToShow.title !== '' ? (
                  <>
                    Mmm...quiero otro
                  </>
                ) : (
                  <>
                    A ver
                  </>
                )}
              </button>

              <button onClick={() => handleReset('path')} className="button-1">
                Reset
              </button>
            </div>

            <br />
            <div>
              {showPath ? (
                <div className="div-showPath2">
                  <img src={Quote} alt="quotes" className="img-quotes" />

                  <h3 className='to-show'>{pathToShow.title}</h3>

                </div>
              ) : null}
            </div>
          </div>

          {/* CAMINO PERSONALIZADO */}
          <div>
            <div className="div-showPath">
              <img src={Pencil} alt="pencil" className="img-walk" />
              <p className="paragraph">
                Agregá un camino extra:
              </p>
            </div>

            <br />
            <form onSubmit={handleSubmit} className={showPath ? "form" : "form2"}>
              <input
                type="text"
                value={newPath}
                onChange={e => handleChange(e.target.value)}
              />

              <button className="button-1">
                Guardar
              </button>
            </form>
          </div>

          <br />

          {/* DEADLINE */}
          <div>
            <div className="div-showPath">
              <img src={Clock} alt="clock" className="img-clock" />
              <div>
                <p className="paragraph-two">¿Necesitás un plazo de días para meterte presión?</p>
                <p className="paragraph-two">Apretá el botón recibir para una fecha aleatoria</p>
              </div>
            </div>

            <div className={showPath ? "button-2noDiv": "button-2div"}>
              <button onClick={handleSeeDeadline} className="button-1">Deadline</button>
              <button onClick={() => handleReset('date')} className="button-1">
                Reset
              </button>
            </div>

            {showDeadline ? (
              <div className={showPath ? "div-noShowPath3" : "div-showPath3"}>
                <h4 className="to-show">{deadlineToShow.date}</h4>
              </div>
            ) : null}
          </div>
        </div>
      </div >
    </div >
  );
}

export default App;
