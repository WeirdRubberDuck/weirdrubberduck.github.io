var AutoNavigationControlButtons = {
  title: "AutoNavigation Controls",
  buttons: {
    'Curve Type: Avoid Collision': async () => { 
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.DefaultCurveOption", 0)
    },
    'Curve Type: ZoomOutOverview': async () => { 
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.DefaultCurveOption", 3)
    },
  }
};

var RenderingButtons = {
  title: "Rendering",
  buttons: {
    'Render Path': async () => { 
      // TODO
    },
    'Render Path With Directions': async () => { 
      // TODO
    },
  }
};

var GoToButtons = {
  title: "Go To Planets/ Moons",
  buttons: {
    'EARTH': async () => { 
      openspace.autonavigation.goTo("Earth");
    },
    'Moon': async () => { 
      openspace.autonavigation.goTo("Moon");
    },
    'ISS': async () => { 
      openspace.autonavigation.goTo("ISS");
    },
    'MERCURY': async () => { 
      openspace.autonavigation.goTo("Mercury");
    },
    'VENUS': async () => { 
      openspace.autonavigation.goTo("Venus");
    },
    'MARS': async () => { 
      openspace.autonavigation.goTo("Mars");
    },
    'JUPITER': async () => { 
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
    'SATURN': async () => { 
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
    'URANUS': async () => { 
      openspace.autonavigation.goTo("Uranus");
    },
    'NEPTUNE': async () => { 
      openspace.autonavigation.goTo("Neptune");
    },
    'PLUTO': async () => { 
      openspace.autonavigation.goTo("Pluto");
    },
  }
};

var GoToNavStateButtons = {
  title: "Go To Navigation States",
  buttons: {
    'TODO': async () => { 
      openspace.autonavigation.goTo("Earth");
    },
    'TODO': async () => { 
      openspace.autonavigation.goTo("Moon");
    },
  }
};

var autoNavigationButtonGroups = [GoToButtons, GoToNavStateButtons];
