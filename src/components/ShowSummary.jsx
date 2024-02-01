function ShowSummary({ show, goBackToList }) {
    return (
      <div className="show-summary">
        <img src={show.show.image.original} alt={show.show.name} />
        <div className="show-summary-content">
          <h1>{show.show.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: show.show.summary }} />
          <button className="button" onClick={goBackToList}>
            Browse Shows
          </button>
        </div>
      </div>
    );
  }

export default ShowSummary;