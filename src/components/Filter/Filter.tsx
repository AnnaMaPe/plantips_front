export const Filter = (): JSX.Element => {
  return (
    <select
      className="filter__select"
      name="careLevel"
      aria-label="level of care required"
      onChange={() => {}}
    >
      <option hidden>Level of care required</option>
      <option value="Ideal for beginners">Ideal for beginners</option>
      <option value="Best for connoisseurs">Best for connoisseurs</option>
      <option value="Only for experts">Only for experts</option>
    </select>
  );
};
