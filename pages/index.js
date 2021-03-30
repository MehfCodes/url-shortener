function Home() {
  return (
    <div className="main-container">
      <form className="form-container">
        <input type="text" className="input" placeholder="Enter your link" />
        <button type="submit" className="button">
          Shorten
        </button>
      </form>
    </div>
  );
}
export default Home;
