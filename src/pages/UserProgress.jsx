const UserProgress = () => {
  return (
    <main className="relative w-full bg-gray-100 p-5  dark:bg-slate-900">
      <div className="flex gap-4">
        <div className="relative w-full rounded bg-white p-16 text-center shadow dark:bg-slate-950 sm:w-1/2">
          <h2 className=" font-serif text-2xl uppercase dark:text-slate-400">
            BMI
          </h2>
          <span className="text-6xl text-lime-500">19.9</span>
          <p className="mt-4 text-xs dark:text-slate-300">Normal</p>
          {/* <p className="dark:text-slate-400 text-base"><strong>{"<"}16 :</strong> Severe Thinness</p> */}
          <div className="group relative mx-auto flex w-32 justify-center">
            <span className="text- rounded font-bold text-lime-500 shadow-sm">
              ⓘ
            </span>
            <span className="absolute top-10 w-full scale-0 rounded bg-slate-900 p-2 px-4 text-left text-xs text-slate-400 shadow-lg transition-all group-hover:scale-100">
              Skinny: {"<18.5"} <br /> Normal: 18.5 - 25 <br /> Obese: {">25"}{" "}
            </span>
          </div>
        </div>
        <div className="relative w-full rounded bg-white p-16 text-center shadow dark:bg-slate-950 sm:w-1/2">
          <h2 className=" font-serif text-2xl uppercase dark:text-slate-400">
            weight
          </h2>
          <span className="text-6xl text-lime-500">Graph</span>
          <p className="mt-4 text-xs dark:text-slate-300">here</p>
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <div className="relative w-full rounded bg-white p-16 text-center shadow dark:bg-slate-950 sm:w-1/2">
          <h2 className=" mb-6 font-serif text-xl uppercase dark:text-slate-400">
            Update Weight
          </h2>
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder=".kg"
            step={0.1}
            className="w-1/4 rounded bg-gray-100 px-3 py-3 text-center text-xl dark:bg-slate-900 dark:text-slate-400"
          />
          <button className="mx-auto mt-4 block rounded-full border border-lime-500 p-3 text-xs text-lime-500 dark:hover:bg-slate-900">
            Click to Update
          </button>
        </div>
        <div className="relative w-full rounded bg-white p-16 text-center shadow dark:bg-slate-950 sm:w-1/2">
          <label className="my-4 block cursor-pointer rounded-lg border-2 border-dashed border-lime-500 py-10">
            <span className="mx-auto rounded-full bg-lime-500 px-4 py-1 text-center font-mono text-4xl font-bold  text-slate-900">
              +
            </span>
            <input
              type="file"
              className="invisible hidden w-full
                        "
            />
          </label>
          <p className="mt-4 text-xs dark:text-slate-300">
            upload your progress picture
          </p>
        </div>
      </div>
    </main>
  );
};

export default UserProgress;
