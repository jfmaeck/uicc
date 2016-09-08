## Hidden uninitialized

Hides elements until the class `is-uicc-initialized` is added to any of its parent elements (e.g. directly on the `html` tag).

In this demo inline script, we listen to the DOMContenLoaded event and then wait for 2.5 seconds until we add the class. 


    @example
    <div class="uicc-hiddenUninitialized" style="height: 200px; padding: 1rem; background-color: turquoise;">This element is hidden until the "is-uicc-initialized" is added to the "body" tag</div>
    <script>document.addEventListener('DOMContentLoaded', function() { setTimeout(function() { document.querySelector('html').classList.add('is-uicc-initialized'); }, 2500); });</script>
