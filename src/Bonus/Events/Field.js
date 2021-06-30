import { styles } from './styles';

export default function Field({ name, label, value, onChange }) {
  return (
    <div style={styles.field}>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.checked)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
