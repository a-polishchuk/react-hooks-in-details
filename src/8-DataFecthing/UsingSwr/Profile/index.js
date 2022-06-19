import { useUser } from '../hooks/useUser';
import './index.css';

function ProfileRow({ param, value }) {
  return (
    <tr>
      <td className="swr-param-cell">{param}</td>
      <td className="swr-value-cell">{value}</td>
    </tr>
  );
}

function Profile() {
  const { loading, data, error } = useUser();

  if (loading) {
    return <div className="swr-profile">Loading...</div>;
  }

  if (error) {
    return (
      <div className="swr-profile">
        <div className="swr-error">Oops! Something went wrong...</div>
      </div>
    );
  }

  const { name, email, phone, website, company } = data;

  return (
    <div className="swr-profile">
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