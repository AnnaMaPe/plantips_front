import { Button } from "../Button/Button";
import { CreateFormStyled } from "./CreateFormStyled";

export const CreateForm = (): JSX.Element => {
  return (
    <CreateFormStyled>
      <input
        className="form__field"
        placeholder="Plant's common name"
        type="text"
        autoComplete="off"
        name="plant's common name"
        aria-label="plant's common name"
      />
      <input
        className="form__field"
        placeholder="Plant's scientifc name"
        type="text"
        autoComplete="off"
        name="plant's scientific name"
        aria-label="plant's scientific name"
      />
      <input
        className="form__field"
        placeholder="Image"
        type="url"
        autoComplete="off"
        name="image"
        aria-label="image"
      />
      <select
        className="form__field form__select"
        placeholder="Level of care required"
        name="level of care required"
        aria-label="level of care required"
      >
        <option value="beginners">Ideal for beginners</option>
        <option value="connoisseurs">Only for connoisseurs</option>
        <option value="experts">Best for experts</option>
      </select>
      <select
        className="form__field form__select"
        placeholder="Light"
        name="light"
        aria-label="light"
      >
        <option value="low indirect light">Low indirect light</option>
        <option value="low to bright indirect light">
          Low to bright indirect light
        </option>
        <option value="bright indirect light">Bright indirect light</option>
        <option value="direct light">Direct light</option>
      </select>
      <select
        className="form__field form__select"
        placeholder="Light"
        name="light"
        aria-label="light"
      >
        <option value="every other day">Every other day</option>
        <option value="once a week">Once a week</option>
        <option value="twice a wee">Twice week</option>
        <option value="twice a month">Twice a mocth</option>
        <option value="once a month">Once a mocth</option>
      </select>
      <textarea
        className="form__field form__tip"
        placeholder="Your tip"
        autoComplete="off"
        name="your tip"
        aria-label="your tip"
      />
      <Button
        className="form__button"
        isDisabled={false}
        text="Create your Tip"
      />
    </CreateFormStyled>
  );
};
