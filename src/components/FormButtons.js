export default function FormButtons() {
  return (
    <div className="form__buttons">
      <input
        type="reset"
        value="Cancel"
        className="form__button form__button--reset"
      />
      <input
        type="submit"
        value="SAVE"
        className="form__button form__button--submit"
      />
    </div>
  );
}