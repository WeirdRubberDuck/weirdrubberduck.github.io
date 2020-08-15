var PlanetButtons = {
  title: "Go To Planets",
  buttons: {
    'Earth': async () => { 
      openspace.autonavigation.goTo("Earth");
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
    'Saturn': async () => { 
      openspace.autonavigation.goTo("Saturn");
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

var SystemButtons = {
  title: "System",
  buttons: {
    'Toggle Dashboard': async () => { 
      var isEnabled = await openspace.getPropertyValue('Dashboard.IsEnabled');
      openspace.setPropertyValueSingle('Dashboard.IsEnabled', !isEnabled[1]);
      openspace.setPropertyValueSingle("RenderEngine.ShowLog", !isEnabled[1]);
      openspace.setPropertyValueSingle("RenderEngine.ShowVersion", !isEnabled[1]);
      openspace.setPropertyValueSingle("RenderEngine.ShowCamera", !isEnabled[1]);
    },
    'Toggle Main GUI': async () => { 
      var isEnabled = await openspace.getPropertyValue('Modules.CefWebGui.Visible');
      openspace.setPropertyValueSingle('Modules.CefWebGui.Visible', !isEnabled[1]);
    },
    '---': () => { 
    },
    '!!!---> Toggle Shutdown <---!!!': () => { 
      openspace.toggleShutdown();
    },
  }
};
var autoNavigationButtonGroups = [PlanetButtons, SystemButtons];
