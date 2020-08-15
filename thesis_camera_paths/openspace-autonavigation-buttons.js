var GoToButtons = {
  title: "Go To Planets/ Moons",
  buttons: {
    'Earth': async () => { 
      openspace.autonavigation.goTo("Earth");
    },
    'Moon': async () => { 
      openspace.autonavigation.goTo("Moon");
    },
    'ISS': async () => { 
      openspace.autonavigation.goTo("ISS");
    },
    'Mercury': async () => { 
      openspace.autonavigation.goTo("Mercury");
    },
    'Venus': async () => { 
      openspace.autonavigation.goTo("Venus");
    },
    'Mars': async () => { 
      openspace.autonavigation.goTo("Mars");
    },
    'Jupiter': async () => { 
      openspace.autonavigation.goTo("Jupiter");
    },
    'Europa': async () => { 
      openspace.autonavigation.goTo("Europa");
    },
    'Io': async () => { 
      openspace.autonavigation.goTo("Io");
    },
    'Callisto': async () => { 
      openspace.autonavigation.goTo("Callisto");
    },
    'Saturn': async () => { 
      openspace.autonavigation.goTo("Saturn");
    },
    'Titan': async () => { 
      openspace.autonavigation.goTo("Titan");
    },
    'Rhea': async () => { 
      openspace.autonavigation.goTo("Rhea");
    },
    'Enceladus': async () => { 
      openspace.autonavigation.goTo("Enceladus");
    },
    'Uranus': async () => { 
      openspace.autonavigation.goTo("Uranus");
    },
    'Neptune': async () => { 
      openspace.autonavigation.goTo("Neptune");
    },
    'Pluto': async () => { 
      openspace.autonavigation.goTo("Pluto");
    },
  }
};

var autoNavigationButtonGroups = [GoToButtons];
