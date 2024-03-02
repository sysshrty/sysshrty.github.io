const getBreweries = async () => {
    try {
      return (await fetch("https://api.openbrewerydb.org/breweries")).json(); //example all in one line
    } catch (error) {
      console.log(error);
    }
  };
  
  const getMap = async (latitude, longitude) => {
    try {
      return (
        await fetch( //$ is insert
          `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
        )
      ).url;
    } catch (error) {
      console.log(error);
    }
  };
  
  const showBreweries = async () => {
    const breweries = await getBreweries();
    const breweriesList = document.getElementById("breweries-section");
    //examplel of nesting section
    breweries.forEach(async (brewery) => {
      const section = document.createElement("section");
      breweriesList.append(section);
      section.classList.add("brewery");
      //anchor tag for url link
      const a = document.createElement("a");
      a.href = brewery.website_url;
      section.append(a);
      //h3 go inside the link put inside the anchor, takes you to the brewery website
      const h3 = document.createElement("h3");
      a.append(h3);
      h3.innerHTML = brewery.name;
     //p is paragraph in the section append to the anchor
      const p = document.createElement("p");
      a.append(p);
      p.innerHTML = `${brewery.brewery_type} brewery`;
  
      const iframe = document.createElement("iframe");
      iframe.src = await getMap(brewery.latitude, brewery.longitude); //pass in b la brew long
      a.append(iframe);
    });
  };
  
  window.onload = showBreweries();