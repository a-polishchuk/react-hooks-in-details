import { useUserContext } from '../UserContext';
import './index.css';

function ProfileRow({ param, value }) {
  return (
    <tr>
      <td className="dfc-param-cell">{param}</td>
      <td className="dfc-value-cell">{value}</td>
    </tr>
  );
}

function Profile() {
  const { loading, data, error } = useUserContext();

  if (loading) {
    return <div className="dfc-profile">Loading...</div>;
  }

  if (error) {
    return (
      <div className="dfc-profile">
        <div className="dfc-error">Oops! Something went wrong...</div>
      </div>
    );
  }

  const { name, email, phone, website, company } = data;

  return (
    <div className="dfc-profile">
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
