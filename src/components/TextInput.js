export default function Textinput({ value, onChangeInput, children }) {
  return (
    <>
      <label>{children}</label>
      <input value={value} onChange={onChangeInput} />
    </>
  );
}
