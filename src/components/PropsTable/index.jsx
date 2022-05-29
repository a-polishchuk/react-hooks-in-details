function Entry({ entry }) {
  const [prop, value] = entry;
  return (
    <tr>
      <td>{prop}</td>
      <td>{typeof value === 'object' ? <PropsTable data={value} /> : value}</td>
    </tr>
  );
}

export function PropsTable({ title, data }) {
  if (!data) {
    return <></>;
  }

  return (
    <table>
      {title && (
        <thead>
          <tr>
            <th colSpan={2}>{title}</th>
          </tr>
        </thead>
      )}
      <tbody>
        {Object.entries(data).map((entry) => (
          <Entry key={entry[0]} entry={entry} />
        ))}
      </tbody>
    </table>
  );
}
