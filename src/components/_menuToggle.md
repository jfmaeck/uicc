## Menu Toggle

Add class `is-open` to morph burger icon into close icon 

    @example
    <div id="menu-toggle-demo" class="uicc-menuToggle">
      <span class="uicc-menuToggle__line"></span>
      <span class="uicc-menuToggle__line"></span>
      <span class="uicc-menuToggle__line"></span>
    </div>
    <script>
    document.getElementById("menu-toggle-demo").addEventListener('click', function(e) {
      e.currentTarget.classList.toggle('is-open');
    });
    </script>
