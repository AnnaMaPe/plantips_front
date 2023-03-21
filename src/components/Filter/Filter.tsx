import { FilterStyled } from "./FilterStyled";

export const Filter = (): JSX.Element => {
  return (
    <FilterStyled className="filter">
      <select
        className="filter__select"
        name="careLevel"
        aria-label="level of care required"
        onChange={() => {}}
      >
        <option hidden>Filter by level of care required</option>
        <option value="Ideal for beginners">Show all tips</option>
        <option value="Ideal for beginners">Ideal for beginners</option>
        <option value="Best for connoisseurs">Best for connoisseurs</option>
        <option value="Only for experts">Only for experts</option>
      </select>
    </FilterStyled>
  );
};
