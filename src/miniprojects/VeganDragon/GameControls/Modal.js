import Button from 'components/Button';

const styles = {
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00000044',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    boxShadow: '5px 5px 0px 0px #00000044',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    fontSize: 20,
    padding: 40,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
};

export default function Modal({ title, message, buttons }) {
  return (
    <div style={styles.root}>
      <div style={styles.body}>
        <div style={styles.title}>{title}</div>
        <div style={styles.message}>{message}</div>
        <div style={styles.buttons}>
          {Object.entries(buttons).map(([key, value]) => (
            <Button key={key} text={key} onClick={value} />
          ))}
        </div>
      </div>
    </div>
  );
}
