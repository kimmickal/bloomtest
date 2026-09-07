---
layout: page
title: Find Food
permalink: /get-food/
intro: See food currently available for pickup around Kobe. Demo listings are shown below; community submissions made on this device also appear here.
wide: true
---
<div class="demo-banner" role="note">
  <strong>Prototype:</strong> The listings below are examples. New listings submitted through the Donate page are stored only in this browser until Bloom connects a live database.
</div>

<div class="food-toolbar" aria-label="Food listing filters">
  <div>
    <label for="food-search">Search listings</label>
    <input id="food-search" type="search" placeholder="Rice, Sannomiya, bakery…">
  </div>
  <div>
    <label for="food-area">Area</label>
    <select id="food-area">
      <option value="all">All areas</option>
      <option value="Chuo">Chuo</option>
      <option value="Nada">Nada</option>
      <option value="Higashinada">Higashinada</option>
      <option value="Hyogo">Hyogo</option>
    </select>
  </div>
  <div>
    <label for="food-type">Food type</label>
    <select id="food-type">
      <option value="all">All food</option>
      <option value="Prepared meals">Prepared meals</option>
      <option value="Bakery">Bakery</option>
      <option value="Produce">Produce</option>
      <option value="Pantry">Pantry</option>
    </select>
  </div>
</div>

<div class="food-layout">
  <section aria-labelledby="available-food-heading">
    <div class="listing-heading">
      <div>
        <p class="eyebrow">Community board</p>
        <h2 id="available-food-heading">Available food</h2>
      </div>
      <span id="food-count" class="count-badge" aria-live="polite"></span>
    </div>
    <div id="food-listings" class="food-listings" aria-live="polite"></div>
    <div id="food-empty" class="info-box" hidden>No listings match these filters. Try another area or food type.</div>
  </section>

  <aside class="map-panel" aria-labelledby="map-heading">
    <p class="eyebrow">Pickup areas</p>
    <h2 id="map-heading">Kobe map</h2>
    <p class="muted">Markers show approximate public pickup areas, not private home addresses.</p>
    <div id="food-map" class="food-map" aria-label="Interactive map of example food pickup locations in Kobe"></div>
    <noscript><p class="info-box">Enable JavaScript to use the interactive map and listing filters.</p></noscript>
  </aside>
</div>

<div class="safety-box">
  <h2>Before you pick up</h2>
  <p>Confirm availability with the provider before traveling. Bloom recommends sharing only public or organization pickup points on the community board and keeping private addresses off public listings.</p>
</div>

<div class="cta-inline">
  <div>
    <p class="eyebrow">Have surplus food?</p>
    <h2>Share it with the community</h2>
    <p>Restaurants, shops, organizations, and neighbors can create a prototype listing in a few steps.</p>
  </div>
  <a class="button primary" href="{{ '/donate/#list-food' | relative_url }}">List surplus food</a>
</div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIINfQ3ynx8qJtCjMZ7HNSkO7N1+6cJrL9I=" crossorigin="">
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script src="{{ '/assets/js/bloom-food.js' | relative_url }}" defer></script>
