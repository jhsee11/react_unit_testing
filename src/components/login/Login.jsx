import { useState, React } from 'react';
import './login.css';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPasword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <span className="user">{user.name}</span>
      <form>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          value={username}
        />
        <input
          onChange={(e) => setPasword(e.target.value)}
          type="password"
          placeholder="password"
          value={password}
        />
        <button
          disabled={username == '' || password == '' ? true : false}
          onClick={handleClick}
        >
          {loading ? 'please wait' : 'Login'}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? 'visible' : 'hidden' }}
        >
          Something went wrong !
        </span>
      </form>
    </div>
  );
};

export default Login;
