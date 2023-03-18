import { useState } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import { Button } from "../Button/Button";
import { CreateFormStyled } from "./CreateFormStyled";

export const CreateForm = (): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { createTip } = useApi();
  const [createData, setCreateData] = useState({
    commonName: "",
    scientificName: "",
    image: "",
    careLevel: "",
    light: "",
    water: "",
    tip: "",
    sharedBy: id,
  });

  const handleCreateDataChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCreateData({
      ...createData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createTip(createData);
  };

  return (
    <CreateFormStyled className="form" onSubmit={onSubmitHandler}>
      <input
        className="form__field"
        placeholder="Plant's common name"
        type="text"
        autoComplete="off"
        name="commonName"
        aria-label="plant's common name"
        onChange={handleCreateDataChange}
      />
      <input
        className="form__field"
        placeholder="Plant's scientifc name"
        type="text"
        autoComplete="off"
        name="scientificName"
        aria-label="plant's scientific name"
        onChange={handleCreateDataChange}
      />
      <input
        className="form__field"
        placeholder="Image"
        type="url"
        autoComplete="off"
        name="image"
        aria-label="image"
        onChange={handleCreateDataChange}
      />
      <select
        className="form__field form__select"
        name="careLevel"
        aria-label="level of care required"
        onChange={handleCreateDataChange}
      >
        <option placeholder="Level of care required" hidden>
          Level of care required
        </option>
        <option value="Ideal for beginners">Ideal for beginners</option>
        <option value="Only for connoisseurs">Only for connoisseurs</option>
        <option value="Best for experts">Best for experts</option>
      </select>
      <select
        className="form__field form__select"
        placeholder="Light"
        name="light"
        aria-label="light"
        onChange={handleCreateDataChange}
      >
        <option placeholder="Light" hidden>
          Light
        </option>
        <option value="Low indirect light">Low indirect light</option>
        <option value="Low to bright indirect light">
          Low to bright indirect light
        </option>
        <option value="Bright indirect light">Bright indirect light</option>
        <option value="Direct light">Direct light</option>
      </select>
      <select
        className="form__field form__select"
        name="water"
        aria-label="water"
        onChange={handleCreateDataChange}
      >
        <option placeholder="Water" hidden>
          Water
        </option>
        <option value="Every other day">Every other day</option>
        <option value="Once a week">Once a week</option>
        <option value="Twice a wee">Twice week</option>
        <option value="Twice a month">Twice a mocth</option>
        <option value="Once a month">Once a mocth</option>
      </select>
      <textarea
        className="form__field form__tip"
        placeholder="Your tip"
        autoComplete="off"
        name="tip"
        aria-label="your tip"
        onChange={handleCreateDataChange}
      />
      <Button
        className="form__button"
        isDisabled={false}
        text="Create your Tip"
      />
    </CreateFormStyled>
  );
};
