export function FilterByPrice({
  setPackageMin,
  setPackageMax,
  packageMin,
  packageMax,
}) {
  function pakageMinValue(e) {
    setPackageMin(e.target.value);
  }
  function pakageMaxValue(e) {
    setPackageMax(e.target.value);
  }

  return (
    <div>
      <input value={packageMin} onInput={(e) => pakageMinValue(e)}></input>
      <input value={packageMax} onInput={(e) => pakageMaxValue(e)}></input>
    </div>
  );
}
