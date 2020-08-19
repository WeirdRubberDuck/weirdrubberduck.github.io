var StartUpButtons = {
  title: "Start Up Settings (PRESS AAALL THE BUTTONNS!!!)",
  buttons: {
    'PAUSE': async () => { 
      openspace.time.setPause(true);
    },
    'Set time (aug 16 2020, 8:00:00)': async () => { 
      openspace.time.setTime("2020-08-16T08:00:00");
    },
    'Set Orbit Speed': async () => { 
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.AtNodeNavigator.OrbitSpeedFactor", 0.25);
    },
  }
};

var AutoNavigationControlButtons = {
  title: "AutoNavigation Controls",
  buttons: {
    'Curve Type: Avoid Collision': async () => { 
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.DefaultCurveOption", 0);
    },
    'Curve Type: ZoomOutOverview': async () => { 
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.DefaultCurveOption", 3);
    },
    'Apply Orbit When Idle': async () => { 
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.DefaultStopBehavior", 1);
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle", true);
    },
    'Stop Orbit': async () => { 
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.DefaultStopBehavior", 0);
      openspace.setPropertyValueSingle("Modules.AutoNavigation.AutoNavigationHandler.ApplyStopBehaviorWhenIdle", false);
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
      openspace.autonavigation.renderPath(50, false, true, 800000000);
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
      openspace.autonavigation.renderControlPoints(800000000);
    },
    'Render Control Points (BIG)': async () => { 
      openspace.autonavigation.renderControlPoints(5000000000);
    },
  }
};

var PredefinedPathsButtons = {
  title: "Predefined Paths",
  buttons: {
    'Planets - ORBIT': async () => { 
      var spec = { 
        Instructions: 
        [
          { Type: "Node", Target: "Moon", StopDetails: {Behavior: "Orbit"}  },
          { Type: "Node", Target: "Earth", StopDetails: {Behavior: "Orbit"}  },     
          { Type: "Node", Target: "Jupiter", StopDetails: {Behavior: "Orbit"}  },  
          { Type: "Node", Target: "Saturn", StopDetails: {Behavior: "Orbit"}  },  
          { Type: "Node", Target: "Venus", StopDetails: {Behavior: "Orbit"} },  
          { Type: "Node", Target: "Earth" }, 
        ], 
        StopAtTargets: true
      }; 
      openspace.autonavigation.generatePath(spec);
    },    
    'Planets - NO STOP': async () => { 
      var spec = { 
        Instructions: 
        [
          { Type: "Node", Target: "Mercury"},  
          { Type: "Node", Target: "Earth"  },     
          { Type: "Node", Target: "Moon"  },
          { Type: "Node", Target: "Saturn"},  
          { Type: "Node", Target: "Jupiter"},  
          { Type: "Node", Target: "Earth" }, 
        ], 
        StopAtTargets: false
      }; 
      openspace.autonavigation.generatePath(spec);
    },
    'Planets - STOP (NO MOVE)': async () => { 
      var spec = { 
        Instructions: 
        [
          { Type: "Node", Target: "Saturn"  },
          { Type: "Node", Target: "Mercury"},  
          { Type: "Node", Target: "Earth"  },     
          { Type: "Node", Target: "Uranus"},  
          { Type: "Node", Target: "Io"},  
          { Type: "Node", Target: "Earth" }, 
        ], 
        StopAtTargets: true
      }; 
      openspace.autonavigation.generatePath(spec);
    },
    'Earth-Moonbackside-Italy-NY': async () => { 
      var earth_italy = {
        Anchor: "Earth",
        Pitch: -0.00024791876785457134,
        Position: [14672289, 3051870, 11914680],
        ReferenceFrame: "Earth",
        Up: [-0.6153947114944458, -0.09583038836717606, 0.7823719382286072],
        Yaw: -0.0032020355574786663
      }
      
      var earth_NY = {
        Anchor: "Earth",
        Pitch: -4.446443213623752e-14,
        Position: [-1149723.125, -15326986, 11456330],
        ReferenceFrame: "Earth",
        Up:  [0.04971231892704964, -0.6003473401069641, -0.7981927990913391],
        Yaw: -5.649924972317422e-13
      }
      
      var moon_backside = {
        Anchor: "Moon",
        Pitch: 6.202149904765974e-11,
        Position: [-5141444.5, -856711.9375, -160723.03125],
        ReferenceFrame: "Moon",
        Up: [-0.10047027468681335, 0.7298203110694885, -0.6762159466743469],
        Yaw: 1.0380107884344625e-10
      }

      var spec = { 
        Instructions: 
        [
          { Type: "Node", Target: "Earth", Duration: 24 }, //180 turn
          { Type: "NavigationState", NavigationState: moon_backside , Duration: 20 }, //other side of target
          { Type: "NavigationState", NavigationState: earth_italy, Duration: 20 }, 
          { Type: "NavigationState", NavigationState: earth_NY, Duration: 12 }, 
        ]               
      }; 
      openspace.autonavigation.generatePath(spec);
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
    'Ganymede': async () => { 
      openspace.autonavigation.goTo("Ganymede");
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
      var navState = {
        Anchor: "Mars",
        Pitch: 1.21062433719635,
        Position: [-2142963.75, -2465656.25, 1244990],
        ReferenceFrame: "Mars",
        Up: [-0.6559295654296875, 0.20299135148525238, -0.7270150780677795],
        Yaw: 0.00008311454439535737
      }
      var spec = {Instructions: [{ Type: "NavigationState", NavigationState: navState }]};
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
    'A view of Jupiter': async () => { 
      // Sun-lit on Aug 17 2020
      var navState = {
        Anchor:"Jupiter",
        Pitch:-0.919457E-3,
        Position:[-1.298352E9,-4.416869E8,5.142781E8],
        ReferenceFrame:"Root",
        Up:[-0.212983E0,0.939293E0,0.269010E0],
        Yaw:-0.280538E-3
    }
      var spec = {Instructions: [{ Type: "NavigationState", NavigationState: navState }]};
      openspace.autonavigation.generatePath(spec);
    },
  }
};

var autoNavigationButtonGroups = [StartUpButtons, AutoNavigationControlButtons, RenderingButtons, PredefinedPathsButtons, GoToButtons, GoToNavStateButtons];
