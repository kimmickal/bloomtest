(() => {
  const STORAGE_KEY = 'bloomKobeSurplusListingsV1';

  const samples = [
    {
      id: 'sample-1', title: '12 prepared bento boxes', provider: 'Harbor Cafe', type: 'Prepared meals',
      area: 'Chuo', place: 'Sannomiya Station area', until: 'Today · 19:30',
      contact: 'Ask at the front counter', notes: 'Contains wheat, soy, egg, and fish. Please bring a bag.',
      lat: 34.6949, lng: 135.1955, sample: true
    },
    {
      id: 'sample-2', title: 'Bread and pastries', provider: 'Neighborhood Bakery', type: 'Bakery',
      area: 'Nada', place: 'Rokkomichi Station area', until: 'Today · 20:00',
      contact: 'Show this listing at pickup', notes: 'Assorted items from today. May contain wheat, dairy, egg, and nuts.',
      lat: 34.7141, lng: 135.2383, sample: true
    },
    {
      id: 'sample-3', title: 'Seasonal vegetables', provider: 'Community Garden', type: 'Produce',
      area: 'Higashinada', place: 'Sumiyoshi Station area', until: 'Tomorrow · 12:00',
      contact: 'Volunteer table outside community room', notes: 'Mixed leafy greens and root vegetables. Quantity varies.',
      lat: 34.7196, lng: 135.2619, sample: true
    },
    {
      id: 'sample-4', title: 'Rice, canned beans, and noodles', provider: 'Local Pantry Partner', type: 'Pantry',
      area: 'Hyogo', place: 'Minatogawa Park area', until: 'Tomorrow · 17:00',
      contact: 'Ask for the Bloom pickup shelf', notes: 'Shelf-stable items. Limit one bundle per household in this demo.',
      lat: 34.6799, lng: 135.1664, sample: true
    }
  ];

  function readLocalListings() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(raw) ? raw : [];
    } catch (_) {
      return [];
    }
  }

  function writeLocalListings(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items.slice(0, 50)));
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  }

  function formatDateTime(value) {
    if (!value) return 'Time not specified';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(d);
  }

  function areaCoordinates(area) {
    return {
      Chuo: [34.6949, 135.1955],
      Nada: [34.7141, 135.2383],
      Higashinada: [34.7196, 135.2619],
      Hyogo: [34.6799, 135.1664]
    }[area] || [34.6901, 135.1956];
  }

  function initBoard() {
    const root = document.getElementById('food-listings');
    if (!root) return;

    const search = document.getElementById('food-search');
    const area = document.getElementById('food-area');
    const type = document.getElementById('food-type');
    const count = document.getElementById('food-count');
    const empty = document.getElementById('food-empty');
    const local = readLocalListings().map(item => ({ ...item, sample: false }));
    const allListings = [...local, ...samples];
    let map;
    let markerLayer;

    if (window.L && document.getElementById('food-map')) {
      map = L.map('food-map', { scrollWheelZoom: false }).setView([34.695, 135.205], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      markerLayer = L.layerGroup().addTo(map);
    }

    function render() {
      const q = search.value.trim().toLowerCase();
      const selectedArea = area.value;
      const selectedType = type.value;
      const filtered = allListings.filter(item => {
        const haystack = `${item.title} ${item.provider} ${item.area} ${item.place} ${item.notes || ''}`.toLowerCase();
        return (!q || haystack.includes(q)) &&
          (selectedArea === 'all' || item.area === selectedArea) &&
          (selectedType === 'all' || item.type === selectedType);
      });

      count.textContent = `${filtered.length} listing${filtered.length === 1 ? '' : 's'}`;
      empty.hidden = filtered.length !== 0;
      root.innerHTML = filtered.map(item => `
        <article class="food-card">
          <div class="food-card-top">
            <div>
              <div class="listing-meta"><span>${escapeHtml(item.type)}</span><span>${escapeHtml(item.area)}</span>${item.sample ? '<span>Demo</span>' : '<span>Your listing</span>'}</div>
              <h3>${escapeHtml(item.title)}</h3>
              <p class="provider-name">${escapeHtml(item.provider)}</p>
            </div>
            <span class="availability-dot" aria-hidden="true"></span>
          </div>
          <dl class="listing-details">
            <div><dt>Pickup</dt><dd>${escapeHtml(item.place)}</dd></div>
            <div><dt>Available until</dt><dd>${escapeHtml(item.sample ? item.until : formatDateTime(item.until))}</dd></div>
            <div><dt>Instructions</dt><dd>${escapeHtml(item.contact)}</dd></div>
          </dl>
          ${item.notes ? `<p class="listing-notes">${escapeHtml(item.notes)}</p>` : ''}
        </article>`).join('');

      if (markerLayer) {
        markerLayer.clearLayers();
        filtered.forEach(item => {
          const coords = (Number.isFinite(item.lat) && Number.isFinite(item.lng)) ? [item.lat, item.lng] : areaCoordinates(item.area);
          L.marker(coords).bindPopup(`<strong>${escapeHtml(item.title)}</strong><br>${escapeHtml(item.place)}<br><small>Approximate pickup area</small>`).addTo(markerLayer);
        });
      }
    }

    [search, area, type].forEach(control => control.addEventListener('input', render));
    render();
  }

  function initForm() {
    const form = document.getElementById('surplus-food-form');
    if (!form) return;
    const status = document.getElementById('listing-status');
    const untilInput = document.getElementById('listing-until');

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset() + 30);
    untilInput.min = new Date().toISOString().slice(0, 16);

    form.addEventListener('submit', event => {
      event.preventDefault();
      status.textContent = '';
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const area = data.get('area');
      const coords = areaCoordinates(area);
      const listing = {
        id: `local-${Date.now()}`,
        title: data.get('title').trim(), provider: data.get('provider').trim(), type: data.get('type'), area,
        place: data.get('place').trim(), until: data.get('until'), contact: data.get('contact').trim(),
        notes: data.get('notes').trim(), lat: coords[0], lng: coords[1]
      };

      const existing = readLocalListings();
      existing.unshift(listing);
      writeLocalListings(existing);
      form.reset();
      status.innerHTML = 'Demo listing created on this device. <a href="../get-food/">Open the community board</a> to see it.';
    });
  }

  initBoard();
  initForm();
})();
