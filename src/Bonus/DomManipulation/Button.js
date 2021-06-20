const styles = {
  container: {
    margin: 5,
  },
  button: {
    padding: 5,
  },
};

export default function Button({ text, onClick }) {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
