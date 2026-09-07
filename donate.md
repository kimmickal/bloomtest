---
layout: page
title: Donate
permalink: /donate/
intro: Support Bloom with food donations or financial contributions, or post surplus food for local pickup.
wide: true
---
<div class="cards two">
<div class="card">
<h2>Donate food</h2>
<p>We welcome safe food that can be distributed to households in Kobe.</p>
<h3>Suggested items</h3>
<ul><li>Rice, noodles, and grains</li><li>Canned fish, beans, and vegetables</li><li>Cooking oil, sauces, and seasonings</li><li>Fresh produce and bakery items when pickup can be arranged safely</li></ul>
<p><strong>Add Bloom's permanent drop-off hours and location here.</strong></p>
</div>
<div class="card">
<h2>Donate money</h2>
<p>Financial support helps cover transport, storage, refrigeration, packaging, and food purchases.</p>
<p><strong>Add your secure donation link here.</strong></p>
<a class="button primary" href="#">Donate online</a>
</div>
</div>

<section id="list-food" class="listing-form-section" aria-labelledby="list-food-heading">
  <p class="eyebrow">Community sharing prototype</p>
  <h2 id="list-food-heading">List surplus food</h2>
  <p>Create a temporary listing for the prototype community board. For this GitHub Pages demo, the listing is saved only in this browser and is not sent to Bloom or published for other visitors.</p>

  <form id="surplus-food-form" class="surplus-form">
    <div class="form-grid">
      <div class="field full">
        <label for="listing-title">What food is available? <span aria-hidden="true">*</span></label>
        <input id="listing-title" name="title" required maxlength="80" placeholder="e.g. 12 prepared bento boxes">
      </div>
      <div class="field">
        <label for="listing-provider">Provider or organization <span aria-hidden="true">*</span></label>
        <input id="listing-provider" name="provider" required maxlength="60" placeholder="e.g. Harbor Cafe">
      </div>
      <div class="field">
        <label for="listing-type">Food type <span aria-hidden="true">*</span></label>
        <select id="listing-type" name="type" required>
          <option value="">Choose a type</option>
          <option>Prepared meals</option>
          <option>Bakery</option>
          <option>Produce</option>
          <option>Pantry</option>
        </select>
      </div>
      <div class="field">
        <label for="listing-area">Pickup ward / area <span aria-hidden="true">*</span></label>
        <select id="listing-area" name="area" required>
          <option value="">Choose an area</option>
          <option>Chuo</option>
          <option>Nada</option>
          <option>Higashinada</option>
          <option>Hyogo</option>
        </select>
      </div>
      <div class="field">
        <label for="listing-place">Public pickup point <span aria-hidden="true">*</span></label>
        <input id="listing-place" name="place" required maxlength="100" placeholder="e.g. Near Sannomiya Station, south exit">
      </div>
      <div class="field">
        <label for="listing-until">Available until <span aria-hidden="true">*</span></label>
        <input id="listing-until" name="until" type="datetime-local" required>
      </div>
      <div class="field">
        <label for="listing-contact">Contact / pickup instructions <span aria-hidden="true">*</span></label>
        <input id="listing-contact" name="contact" required maxlength="100" placeholder="e.g. Ask at the front counter">
      </div>
      <div class="field full">
        <label for="listing-notes">Food safety, allergens, quantity, or other notes</label>
        <textarea id="listing-notes" name="notes" rows="4" maxlength="300" placeholder="Include information recipients should know before pickup."></textarea>
      </div>
    </div>
    <label class="checkbox-row">
      <input id="listing-safety" type="checkbox" required>
      <span>I confirm this listing uses a public/organization pickup point and does not publish a private home address.</span>
    </label>
    <div class="button-row">
      <button class="button primary" type="submit">Create demo listing</button>
      <a class="button ghost" href="{{ '/get-food/' | relative_url }}">View community board</a>
    </div>
    <p id="listing-status" class="form-status" role="status" aria-live="polite"></p>
  </form>
</section>

## Business and large donations

Restaurants, shops, farms, and companies can contact Bloom before arranging a large delivery. Add Bloom's food-safety requirements and preferred contact method here.

<script src="{{ '/assets/js/bloom-food.js' | relative_url }}" defer></script>
