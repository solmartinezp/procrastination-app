import React, { Fragment, useState } from 'react';
import './App.css';

type FormElement = React.FormEvent<HTMLFormElement>;

interface IPath {
  title: string;
};

function App(): JSX.Element {
  const [newPath, setNewPath] = useState<string>('');
  // const [paths, setPaths] = useState<IPath[]>([]);
  const [listOfPaths, setListOfPaths] = useState<IPath[]>([
    {
      title: 'El camino más rápido'
    },
    {
      title: 'El camino más completo'
    },
    {
      title: 'El camino de menos esfuerzo'
    },
    {
      title: 'El camino hacia el reconocimiento'
    },
    {
      title: 'El camino esperable'
    },
    {
      title: 'El camino por el que se inclina más tu corazón'
    },
    {
      title: 'El camino más polémico'
    },
    {
      title: 'El camino más tradicional'
    },
    {
      title: 'El camino más innovador'
    },
  ]);
  const [showPath, setShowPath] = useState<boolean>(false);
  const [pathToShow, setPathToShow] = useState<IPath>({
    title: ''
  });

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addPath(newPath);
    setNewPath('');
  };

  const addPath = (title: string) => {
    const newPaths: IPath[] = [...listOfPaths, {title }];
    setListOfPaths(newPaths);
  }

  const handleChange = (e: string) => {
    setNewPath(e);
  };

  const handleSeePaths = () => {
    const length = listOfPaths.length;

    // numero random entre la cantidad de length
    // uso ese numero como index y seteo ese objecto como pathToShow
    setShowPath(true);
  };

  const handleReset = () => {
    setShowPath(false);
  };

  return (
    <div className="paper">
    <div className="pattern">
      <div className="content">

      <div className="typewriter-div">
        <div className="typewriter">
          Herramienta anti-procrastinación:
        </div>
      </div>
    <br/>

    {/* BOTÓN PARA ELEGIR UN CAMINO */}
    <div>
      <p className="paragraph">¿Qué camino voy a seguir para encarar este proyecto?</p>
      
      <br/>
      <div className="button-1div">
        <button onClick={handleSeePaths} className="button-1">
          {showPath && pathToShow.title !== '' ? (
            <>
              Mmm...quiero otro
            </>
          ): (
            <>
              A ver
            </>
          )}
        </button>

        <button onClick={handleReset} className="button-1">
          Reset
        </button>
      </div>

      <br/>
      <div>
        {showPath ? (
          <h3>{pathToShow.title}</h3>
        ): null}
        {/* MOSTRAR CAMINO */}
      </div>
    </div>

    {/* CAMINO PERSONALIZADO */}
    <div>
      <p className="paragraph">
        Agregá un camino extra:
      </p>

      <br/>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={newPath}
          onChange={e => handleChange(e.target.value)}
        />

        <button>
          Guardar
        </button>
      </form>
    </div>

    <br/>

    {/* DEADLINE */}
    <div>
      <p className="paragraph">¿Necesitás un plazo de días para meterte presión?</p>
      <p className="paragraph">Apretá el botón recibir para una fecha aleatoria</p>
    </div>


    {/*
      EXTRA MOTIVACIÓN: Un botón que haga aparecer un modal una foto
    */}

    {/* -------- ESTO NO VA A APARECER ------------ */}
    {
      // listOfPaths.map((t: IPath, i: number) =>{
      //   return <h1 key={i}>
      //     {t.title}
      //   </h1>
      // })
    }
    {/* ------------------------------------------- */}
        </div>
      </div >
    </div >
  );
}

export default App;
