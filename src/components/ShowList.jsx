function ShowList({ shows, showSummary }) {
    return (
      <div className="show-list">
        {shows.map((show) => (
          <div key={show.show.id} className="show-card">
            <img
              src={
                show.show.image?.medium || "https://via.placeholder.com/210x380"
              }
              alt={show.show.name}
            />
            <div className="show-card-content">
              <h2>{show.show.name}</h2>
              <p>Genre: {show.show.genres.join(", ")}</p>
              <p>Language: {show.show.language}</p>
              <p>Rating: {show.show.rating?.average || "N/A"}</p>
              <button
                className="button"
                onClick={() => showSummary(show.show.id)}
              >
                Show Summary
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default ShowList;