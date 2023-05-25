const RegisterPage = (): JSX.Element => {
  return (
    <>
      <img
        className="register__photo"
        src="/images/register_photo.webp"
        alt="Calathea plant"
        width="360"
        height="161"
      />
      <span className="register__introduction">welcome back to</span>
      <h1 className="register__title">PlanTips</h1>
      <span className="register_sub-title">
        Check the latest tips from our leafy community!
      </span>
      <span className="register__info">need an account?</span>
    </>
  );
};

export default RegisterPage;
