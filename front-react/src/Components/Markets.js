import React from 'react';
import './Markets.css'

function Markets () {
    return (
    <div className="MarketsFilter">
      <div className = "Markets">Markets</div>

      <input className="searchFilter" type="text" placeholder="Search for restaurant and cuisines"></input>

        {/* <i class="fa fa-search"></i>  */}
        <button className="filterIcon">
            <i class="fa fa-filter"></i>
        </button>

    </div>
    )
}

export default Markets;