import React from "react";

const SearchPage = () => {
   return (
      <body>

         <nav id="nav">
            <div>
               <h1>Mimoville</h1>
               <img src="client/assets/Mimoville-logo.png" alt="Mimoville Logo"></img>
               <form role="search" id="form">
                  <input type="search" placeholder="Find Your Getaway" id="search"></input>
                  <button type="submit">Search</button>
               </form>
            </div>
         </nav>

         <main id="main">
            <div class="listing"></div>
         </main>

      </body>
   );
};

export default SearchPage;