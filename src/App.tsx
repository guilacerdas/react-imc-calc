import { useState } from "react";
import { IconContext } from "react-icons/lib/esm/iconContext";
import { RiRestartFill, RiThumbDownFill } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";

function App() {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const heightHandleInput = (event: any) => {
    setHeight(event.target.value);
  };

  const weightHandleInput = (event: any) => {
    setWeight(event.target.value);
  };

  const [layoutThinnessChanges, setLayoutThinnessChanges] = useState(
    "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
  );

  const [layoutNormalChanges, setLayoutNormalChanges] = useState(
    "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
  );

  const [layoutOverweightChanges, setLayoutOverweightChanges] = useState(
    "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
  );

  const [layoutObesityChanges, setLayoutObesityChanges] = useState(
    "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
  );
  const [layoutRestartButton, setLayoutRestartButton] = useState("hidden");
  const [layoutCalcButton, setLayoutCalcButton] = useState(
    "flex justify-center w-full py-1 text-lg text-white bg-blue-600 rounded-lg sm:w-6/12 sm:items-center"
  );

  const userImcResult = (event: any) => {
    event.preventDefault();
    const imcResult = weight / (height * height);

    if (imcResult > 0 && imcResult <= 18.5) {
      setLayoutThinnessChanges(
        "flex flex-col items-center justify-center p-5 border rounded-lg sm:w-full"
      );
    } else {
      setLayoutThinnessChanges("hidden");
    }

    if (imcResult > 18.5 && imcResult <= 24.9) {
      setLayoutNormalChanges(
        "flex flex-col items-center justify-center p-5 border rounded-lg sm:w-full"
      );
    } else {
      setLayoutNormalChanges("hidden");
    }

    if (imcResult > 24.9 && imcResult <= 30) {
      setLayoutOverweightChanges(
        "flex flex-col items-center justify-center p-5 border rounded-lg sm:w-full"
      );
    } else {
      setLayoutOverweightChanges("hidden");
    }

    if (imcResult > 30 && imcResult <= 99) {
      setLayoutObesityChanges(
        "flex flex-col items-center justify-center p-5 border rounded-lg sm:w-full"
      );
    } else {
      setLayoutObesityChanges("hidden");
    }
    if (imcResult !== 0) {
      setLayoutRestartButton("flex text-blue-600 align text-8xl");
      setLayoutCalcButton("hidden");
    }
  };

  const restorePage = () => {
    setLayoutNormalChanges(
      "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
    );
    setLayoutObesityChanges(
      "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
    );
    setLayoutOverweightChanges(
      "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
    );
    setLayoutThinnessChanges(
      "flex flex-col items-center justify-center p-4 border rounded-lg sm:w-5/12"
    );
    setHeight(0);
    setWeight(0);
    setLayoutRestartButton("hidden");
    setLayoutCalcButton(
      "flex justify-center w-full py-1 text-lg text-white bg-blue-600 rounded-lg sm:w-6/12 sm:items-center"
    );
  };

  return (
    <section className="w-full pt-4 pb-4">
      <div className="container px-4 mx-auto sm:w-9/12">
        <header className="flex items-center gap-1">
          <p className="w-2/12 md:w-[12%] lg:w-[10%] font-bold text-center text-white bg-blue-600 ">
            IMC
          </p>
          <p className="text-[9px] sm:text-xs text-gray-400">
            Powered by B7web - mas usando tailwind e react-icons ; &#10089;
            v-0.0.1
          </p>
        </header>
        <div className="flex flex-col gap-3 pt-6 lg:flex-row ">
          <div className="flex flex-col gap-4 lg:w-5/12 lg:justify-center">
            <div className="flex flex-col gap-2">
              <p className="text-4xl font-bold text-center">Calcule seu IMC</p>
              <p className="text-sm font-light text-center">
                IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
                pela Organização Mundial de Saúde para calcular o peso ideal de
                cada pessoa
              </p>
            </div>
            <form
              className="flex flex-col gap-4"
              action=""
              onSubmit={userImcResult}
            >
              <input
                className="w-full border-b-2"
                type="number"
                value={height > 0 ? height : ""}
                onChange={heightHandleInput}
                placeholder="Digite sua altura. Ex: 1.5 (em metros)"
              />
              <input
                className="w-full border-b-2"
                type="number"
                onChange={weightHandleInput}
                value={weight > 0 ? weight : ""}
                placeholder="Digite seu peso. Ex: 90.2 (em kg)"
              />
              <div className="flex justify-center">
                <input
                  value="Calcular"
                  type="submit"
                  className={layoutCalcButton}
                />
              </div>
            </form>
            <button
              className="flex items-center justify-center w-full"
              onClick={restorePage}
            >
              <RiRestartFill className={layoutRestartButton} />
            </button>
          </div>

          <div className="flex flex-col flex-wrap gap-3 sm:justify-center sm:flex-row lg:w-6/12 ">
            <div className={`bg-blue-400 ${layoutThinnessChanges}`}>
              <IconContext.Provider value={{ color: "white", size: "4em" }}>
                <div className="p-4 rounded-full bg-black/50 ">
                  <RiThumbDownFill />
                </div>
              </IconContext.Provider>
              <p className="text-lg font-bold text-white">Magreza</p>
              <p className="text-sm text-center text-white">
                IMC está entre 0 e 18.5
              </p>
            </div>
            <div className={` bg-green-700 ${layoutNormalChanges}`}>
              <IconContext.Provider value={{ color: "white", size: "4em" }}>
                <div className="p-4 rounded-full bg-black/50">
                  <RiThumbUpFill />
                </div>
              </IconContext.Provider>
              <p className="text-lg font-bold text-white">Normal</p>
              <p className="text-sm text-center text-white">
                IMC está entre 18.5 e 24.9
              </p>
            </div>
            <div className={`bg-yellow-600 ${layoutOverweightChanges}`}>
              <IconContext.Provider value={{ color: "white", size: "4em" }}>
                <div className="p-4 rounded-full bg-black/50">
                  <RiThumbDownFill />
                </div>
              </IconContext.Provider>
              <p className="text-lg font-bold text-white">Sobrepeso</p>
              <p className="text-sm text-center text-white">
                IMC está entre 24.9 e 30
              </p>
            </div>
            <div className={`bg-red-700 ${layoutObesityChanges}`}>
              <IconContext.Provider value={{ color: "white", size: "4em" }}>
                <div className="p-4 rounded-full bg-black/50">
                  <RiThumbDownFill />
                </div>
              </IconContext.Provider>
              <p className="text-lg font-bold text-white">Obesidade</p>
              <p className="text-sm text-center text-white">
                IMC está entre 30 e 99
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
