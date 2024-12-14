
const getMapsLink = (query) => {
  return `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
}

function createMapsButton() {
  const searchInput = document.querySelector('input[name="q"]');
  const searchQuery = searchInput ? searchInput.value : '';
  
  const topNav = document.querySelector('#top_nav');
  if (topNav) {
    const mapButtonWrapper = document.createElement('div');
    mapButtonWrapper.className = 'map-button-wrapper';

    const mapsButton = document.createElement('a');
    mapsButton.textContent = 'Search in Maps';
    mapsButton.className = 'maps-tab-button';
    mapsButton.href = '#';

    mapButtonWrapper.appendChild(mapsButton);
    
    mapsButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(getMapsLink(searchQuery), '_blank');
    });
    
    const tabsList = topNav.querySelector('div');
    if (tabsList) {
      tabsList.appendChild(mapButtonWrapper);
    }
  }
  
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    const src = img.src.toLowerCase();
    if (src.includes('maps') && !img.hasAttribute('data-maps-handler')) {
      const wrapper = img.closest('div');
      if (wrapper) {
        
        wrapper.style.cursor = 'pointer';
        wrapper.setAttribute('data-maps-handler', 'true');
        wrapper.addEventListener('click', () => {
          window.open(getMapsLink(searchQuery), '_blank');
        });
      }
    }
  });
}

createMapsButton();
