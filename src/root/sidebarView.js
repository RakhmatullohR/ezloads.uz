export const sidebarController = (permission) => {
  // GROUPS
  let main = permission?.Main;
  let generic = permission?.Generic;
  let parentOne = permission?.['Parent One'];
  let parentTwo = permission?.['Parent Two'];

  let view = {
    // Parent
    main: main.Main.VIEW,
    generic: generic.Generic.VIEW,
    // Parent One
    childOne: parentOne?.['Child One']?.VIEW,
    childTwo: parentOne?.['Child Two']?.VIEW,
    // Parent Two
    firstChild: parentTwo?.['First Child']?.VIEW,
    secondChild: parentTwo?.['Second Child']?.VIEW,
  };

  let ParentOne = view.childOne || view.childTwo;
  let ParentTwo = view.firstChild || view.secondChild;

  let viewEL = {
    Signin: { view: true },
    Signup: { view: true },

    Main: { view: view.main },
    Generic: { view: view.generic },

    'Parent One': {
      view: ParentOne,
      'Child One': { view: view.childOne },
      'Child Two': { view: view.childTwo },
    },
    'Parent Two': {
      view: ParentTwo,
      'First Child': { view: view.firstChild },
      'Secon Child': { view: view.secondChild },
    },
  };

  return viewEL;
};
