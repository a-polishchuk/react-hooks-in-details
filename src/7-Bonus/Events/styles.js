const common = {
  minWidth: 40,
  minHeight: 40,
  margin: 10,
  padding: 10,
  borderRadius: 10,
  flex: 1,
};

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  field: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  redArea: {
    ...common,
    backgroundColor: 'red',
  },
  greenArea: {
    ...common,
    backgroundColor: 'green',
  },
  blueArea: {
    ...common,
    backgroundColor: 'blue',
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  blueText: {
    color: 'blue',
  },
};
