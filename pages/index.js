import { useState } from 'react';

function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [err, setErr] = useState(false);
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/url', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({ orginal: url }),
    });

    let data = await res.json();
    if (res.ok === true && res.status === 200) {
      setShortUrl(`${window.location.host}/${data.short}`);
    } else {
      setErr(data.message);
    }
  };
  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter your link"
          value={url}
          onChange={handleUrlChange}
        />
        <button type="submit" className="button">
          Shorten
        </button>
      </form>
      <div
        className="show-short-url"
        style={!err ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}
      >
        <p>{!err ? shortUrl : err}</p>
      </div>
    </div>
  );
}
export default Home;
