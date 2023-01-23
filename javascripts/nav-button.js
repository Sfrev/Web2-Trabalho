// navbar menu
const $target = document.getElementById('target');

// button, hamburger icon
const $trigger = document.getElementById('trigger');

// optional options with default values and callback functions
const options = {
  onCollapse: () => {
      console.log('element has been collapsed')
  },
  onExpand: () => {
      console.log('element has been expanded')
  },
  onToggle: () => {
      console.log('element has been toggled')
  }
};

const collapse = new Collapse($target, $trigger, options)

// show the target element
collapse.expand();

// hide the target element
collapse.collapse();

// toggle the visibility of the target element
collapse.toggle();

