## Input Group

### Input Group (with error message)
  
    @example
    <div class="uicc-inputGroup">
        <input type="text" class="uicc-input uicc-inputGroup__input is-invalid" value="input value">
        <span class="uicc-inputGroup__subtext uicc-error" tabindex="-1">This is an error!</span>
    </div>

### Input Group (with floating labels)
  
    @example
    <div class="uicc-inputGroup">
        <input id="inputGroupFloating1" type="text" class="uicc-input uicc-input--floatingLabel uicc-row uicc-row--bigMargin" onchange="if (this.value === '') { this.classList.remove('is-dirty'); } else { this.classList.add('is-dirty'); }">
        <label for="inputGroupFloating1">
          <span>Placeholder 1 ...</span>
        </label>
    </div>
    <div class="uicc-inputGroup">
        <input id="inputGroupFloating2" type="text" class="uicc-input uicc-input--floatingLabel uicc-row uicc-row--extraBigMargin" onchange="if (this.value === '') { this.classList.remove('is-dirty'); } else { this.classList.add('is-dirty'); }">
        <label for="inputGroupFloating2">
          <span>Placeholder 2 ...</span>
        </label>
    </div>
