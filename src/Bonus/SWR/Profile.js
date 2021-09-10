import { useUser } from './useUser';
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
  const { loading, data, error } = useUser(userId);

  if (loading) {
    return <div className="profile">Loading...</div>;
  }

  if (error) {
    return (
      <div className="profile">
        <div className="error">Oops! Something went wrong...</div>
      </div>
    );
  }

  const { name, email, phone, website, company } = data;

  return (
    <div className="profile">
      <table>
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
    </div>
  );
}

export default Profile;
