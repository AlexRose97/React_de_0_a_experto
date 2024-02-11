import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

const ShowAlertSearch = ({ text, lengthResult }) => {
  if (text === "")
    return (<div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>)
  if (lengthResult === 0)
    return (<div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn">No hero with <b>{text}</b></div>)
}

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();//evitar que se recargue
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <ShowAlertSearch text={q} lengthResult={heroes.length} />
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>

    </>
  )
}
