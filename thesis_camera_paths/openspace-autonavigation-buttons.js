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
  title: "Go To Places / Navigation States",
  buttons: {
    'Norrkoping': async () => { 
      var spec = {Instructions: [{ Type: "Node", Target: "Earth", Position: [3692883.50, 1072065.00, 6296840.00] }]};
      openspace.autonavigation.generatePath(spec);
    },
    'Olympus Mons': async () => { 
      var spec = {Instructions: [{Type: "Node", Target: "Mars", Position: [-2883015.00, -3006380.25, 1405841.25] }]};
      openspace.autonavigation.generatePath(spec);
    },
    'Olympus Mons (Horizon)': async () => { 
      var moonSurfaceNavState = {
        Anchor: "Mars",
        Pitch: 1.21062433719635,
        Position: [-2142963.75, -2465656.25, 1244990],
        ReferenceFrame: "Mars",
        Up: [-0.6559295654296875, 0.20299135148525238, -0.7270150780677795],
        Yaw: 0.00008311454439535737
      }
      var spec = {Instructions: [{ Type: "NavigationState", NavigationState: moonSurfaceNavState }]};
      openspace.autonavigation.generatePath(spec);
    },
    'Moon Surface (Horizon)': async () => { 
      // Sun-lit on Aug 17 2020
      var moonSurfaceNavState = {
        Anchor: "Moon",
        Pitch: 0.9760650396347046,
        Position: [-1686168.5, -544959.125, -737563.875],
        ReferenceFrame: "Moon",
        Up: [0.40474796295166016, -0.8696029186248779, -0.28278934955596924],
        Yaw: -0.04599808156490326
      }
      var spec = {Instructions: [{ Type: "NavigationState", NavigationState: moonSurfaceNavState }]};
      openspace.autonavigation.generatePath(spec);
    },
  }
};

var autoNavigationButtonGroups = [AutoNavigationControlButtons, RenderingButtons, PredefinedPathsButtons, GoToButtons, GoToNavStateButtons];
