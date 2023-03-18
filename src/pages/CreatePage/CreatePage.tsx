import { CreateForm } from "../../components/CreateForm/CreateForm";

export const CreatePage = (): JSX.Element => {
  return (
    <>
      <div className="create__text">
        <h1 className="create__title">Share a tip</h1>
        <span className="create__description">
          Share the tip that has made your plant flourish
        </span>
      </div>
      <CreateForm />
    </>
  );
};
