import useApi from "../../hooks/useApi/useApi";
import { addFilterActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";
import { FilterStyled } from "./FilterStyled";

export const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { loadAllTips } = useApi();

  const handleOnChangeFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filteredValues = event.target.value;
    dispatch(addFilterActionCreator(filteredValues));

    loadAllTips(filteredValues);
  };

  return (
    <FilterStyled className="filter">
      <select
        className="filter__select"
        name="careLevel"
        aria-label="level of care required"
        onChange={handleOnChangeFilter}
      >
        <option hidden>Filter by level of care required</option>
        <option value="">Show all tips</option>
        <option value="ideal-for-beginners">Ideal for beginners</option>
        <option value="best-for-connoisseurs">Best for connoisseurs</option>
        <option value="only-for-experts">Only for experts</option>
      </select>
    </FilterStyled>
  );
};
