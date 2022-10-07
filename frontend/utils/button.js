// Decide what the button will look like based on its type (primary or secondary)
// and on its background (light or dark).
export function getButtonAppearance(type, background) {
  if (type === 'primary') {
    if (background === 'light') {
      // Dark primary button on a light background
      return 'dark'
    }
    // Fully white primary button on a dark background
    return 'white'
  }
  if (type === 'secondary') {
    if (background === 'light') {
      // Dark outline primary button on a light background
      return 'dark-outline'
    }
    // White outline primary button on a dark background
    return 'white-outline'
  }
  if (type === 'blue') {
    if (background === 'blue') {
      // Dark outline primary button on a light background
      return 'blue'
    }
    // White outline primary button on a dark background
    return 'blue'
  }
  if (type === 'orange') {
    if (background === 'orange') {
      // Dark outline primary button on a light background
      return 'orange'
    }
    // White outline primary button on a dark background
    return 'orange'
  }
  if (type === 'nav') {
    if (background === 'nav') {
      // Dark outline primary button on a light background
      return 'nav'
    }
    // White outline primary button on a dark background
    return 'orange'
  }

  // Shouldn't happen, but default to dark button just in case
  return 'dark'
}
