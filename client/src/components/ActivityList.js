function ActivityList() {
    return (
        <div className="container">
            <div className="container mt-5">
        <div id="trail_list_header" className="border-bottom">
          <p id="trail_list_title" className="">
            Search By Activity
          </p>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="row justify-content-evenly p-2">
          {/* {trails.map((trail) => (
            <TrailCard key={trail.id} trail={trail} />
          ))} */}
        </div>
      </div>
        </div>
    )
}

export default ActivityList;