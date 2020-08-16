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
    'Clear': async () => { 
      openspace.autonavigation.removeRenderedPath();
      openspace.autonavigation.removeControlPoints();
    },
    'Render Path': async () => { 
      openspace.autonavigation.renderPath(200);
    },
    'Render With Directions': async () => { 
      openspace.autonavigation.renderPath(50, false, true);
    },
    'Render With Directions (MEDIUM)': async () => { 
      openspace.autonavigation.renderPath(50, false, true, 40000000);
    },
    'Render With Directions (BIG)': async () => { 
      openspace.autonavigation.renderPath(50, false, true, 5000000000);
    },
    'Render With All': async () => { 
      openspace.autonavigation.renderPath(50, true, true);
    },
    'Render With All (BIG)': async () => { 
      openspace.autonavigation.renderPath(50, true, true, 40000000);
    },
    'Render Control Points': async () => { 
      openspace.autonavigation.renderControlPoints();
    },
    'Render Control Points (MEDIUM)': async () => { 
      openspace.autonavigation.renderControlPoints(20000000);
    },
    'Render Control Points (BIG)': async () => { 
      openspace.autonavigation.renderControlPoints(5000000000);
    },
  }
};

var PredefinedPathsButtons = {
  title: "Predefined Paths",
  buttons: {
    'TODO': async () => { 
      openspace.autonavigation.goTo("Earth");
    },
    'TODO': async () => { 
      openspace.autonavigation.goTo("Moon");
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
      var spec = {Instructions: [{Type: "Node", Target: "ISS", Height: 150}]};
      openspace.autonavigation.generatePath(spec);
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

var autoNavigationButtonGroups = [AutoNavigationControlButtons, RenderingButtons, PredefinedPathsButtons, GoToButtons, GoToNavStateButtons];
