## Loading Container

Add class `is-loading` to show loading indicator

### Loading Container (default)
  
    @example
    <div class="uicc-loadingContainer uicc-region uicc-region--primary" id="test-loading-container1">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <div class="uicc-loadingContainer__loader">
            <div class="uicc-loadingContainer__dialog">
                <svg class="uicc-loadingContainer__loadingIndicator uicc-loadingIndicator" viewBox="25 25 50 50">
                  <circle class="uicc-loadingIndicator__path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                </svg>
            </div>
        </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('test-loading-container1').classList.toggle('is-loading');">Toggle loading</button>

### Loading Container (blocking)

Add class `is-blocking` to show blocking loading indicator
  
    @example
    <div class="uicc-loadingContainer uicc-region uicc-region--primary is-blocking" id="test-loading-container2">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <div class="uicc-loadingContainer__loader">
            <div class="uicc-loadingContainer__dialog">
                <svg class="uicc-loadingContainer__loadingIndicator uicc-loadingIndicator" viewBox="25 25 50 50">
                  <circle class="uicc-loadingIndicator__path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                </svg>
            </div>
        </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('test-loading-container2').classList.toggle('is-loading');">Toggle loading</button>


### Loading Container (with message)
  
    @example
    <div class="uicc-loadingContainer uicc-region uicc-region--primary" id="test-loading-container3">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <div class="uicc-loadingContainer__loader">
            <div class="uicc-loadingContainer__dialog">
                <span class="uicc-loadingContainer__loadingMessage">Get plenty of sleep – if you can</span>
                <svg class="uicc-loadingContainer__loadingIndicator uicc-loadingIndicator" viewBox="25 25 50 50">
                  <circle class="uicc-loadingIndicator__path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"/>
                </svg>
            </div>
        </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('test-loading-container3').classList.toggle('is-loading');">Toggle loading</button>
