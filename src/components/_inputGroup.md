## Input Group

### Input Group (with label and error message)
  
    @example
    <label class="uicc-inputGroup">
        <span class="uicc-inputGroup__label">Titel</span>
        <input type="text" class="uicc-input uicc-input--stateful is-invalid" value="input value">
        <div class="uicc-inputGroup__subtext uicc-inputGroup__subtext--error">This is an error!</div>
    </label>


### Input Group (constrained width)
  
    @example
    <label class="uicc-inputGroup uicc-inputGroup--constrainedWidth">
        <span class="uicc-inputGroup__label">Titel</span>
        <input type="text" class="uicc-input">
    </label>
### Input Group (aligned button)
  
    @example
    <div class="uicc-grid uicc-grid--gutters">
      <div class="uicc-grid__cell">
        <label class="uicc-inputGroup">
            <span class="uicc-inputGroup__label">Suchwort</span>
            <input type="text" class="uicc-input">
        </label>
      </div>
      <div class="uicc-grid__cell">
        <button type="button" class="uicc-inputGroup__alignedButton uicc-button uicc-button--primary">Suchen</button>
      </div>
    </div>
