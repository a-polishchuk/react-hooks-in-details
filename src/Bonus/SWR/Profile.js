import useSWR from 'swr';
import { fetcher } from './fetcher';
import './Profile.css';

function ProfileRow({ param, value }) {
  return (
    <tr>
      <td className="param-cell">{param}</td>
      <td className="value-cell">{value}</td>
    </tr>
  );
}

function Profile({ userId }) {
  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    fetcher
  );

  if (!data) {
    return <div className="profile">Loading...</div>;
  }

  const { name, email, phone, website, company } = data;

  return (
    <table className="profile">
      <tbody>
        <ProfileRow param="Name" value={name} />
        <ProfileRow param="Email" value={email} />
        <ProfileRow param="Phone" value={phone} />
        <ProfileRow
          param="Website"
          value={<a href={'http://' + website}>{website}</a>}
        />
        <ProfileRow param="Company" value={company.name} />
      </tbody>
    </table>
  );
}

export default Profile;
