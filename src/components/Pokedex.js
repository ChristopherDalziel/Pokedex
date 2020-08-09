import React from "react";
import { connect } from "react-redux";

const Pokedex = (props) => {
  console.log("props", props);
  // const handleInput = (e) => {
  //   e.preventDefault();
  // };

  const { loading, pokemon } = props;
  return (
    <div className="pokedex">
      {loading ? <p>loading</p> : <p>loadingfinished</p>}

      {/* <form>
        <input type="number" name="pokemonNumber"></input>
        <button>test</button>
      </form> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.data.pokemon,
  loading: state.pokemon.loading,
});

export default connect(mapStateToProps)(Pokedex);
