import React from 'react';

const Search = () => {
    return (
        <div className='search-container'>
            <form action="">
                <input type="text" placeholder="Entrez le titre d'un film" id="search" />
                <br />
                <input type="submit" value="Rechercher" id="submit" />
            </form>
            <div className="sort-container">
                <button id="left" className="btn">top</button>
                <button id="right" className="btn">flop</button>
            </div>
        </div>

       
        
        
    );
};

export default Search;