<template>
  <div class="layout">
    <div class="header container">
      <a href="/" class="logo">JKT</a>
      <a href="#">Getting Started</a>
    </div>
    <slot></slot>
    <div class="footer">
      <div class="feedback">
        <div class="container">
          <div>
            <h2>Unlock New Experience. Subscribe for updates today</h2>
            <p>
              Stay tuned for our latest event updates and be the first to
              <span>register</span> for upcoming events in <span>Jakarta</span>
            </p>
          </div>
          <div>
            <form>
              <label for="email">Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="Type Your Email Here"
                />
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>Created by Emil Setiawan, Made with Vue3.0</div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
