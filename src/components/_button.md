## Button

### Button (default)
  
    @example
    <a class="uicc-button uicc-button--primary">Primary</a>
    <a class="uicc-button uicc-button--secondary">Secondary</a>
    <a class="uicc-button uicc-button--danger">Danger</a>

### Button (outline)
  
    @example
    <a class="uicc-button uicc-button--outline uicc-button--primary">Primary</a>
    <a class="uicc-button uicc-button--outline uicc-button--secondary">Secondary</a>
    <a class="uicc-button uicc-button--outline uicc-button--danger">Danger</a>

### Button (is-active)
  
You can force the hover state by adding the `is-active` flag
  
    @example
    <a class="uicc-button uicc-button--primary is-active">Primary</a>
    <a class="uicc-button uicc-button--secondary  is-active">Secondary</a>
    <a class="uicc-button uicc-button--danger is-active">Danger</a>

### Button (disabled)

You can either use the ```disabled``` attribute or the ```is-disabled``` class.

    @example
    <button class="uicc-button uicc-button--primary" disabled>Primary</button>
    <button class="uicc-button uicc-button--secondary" disabled>Secondary</button>
    <button class="uicc-button uicc-button--danger" disabled>Disabled</button>

### Button (block)
  
    @example
    <a class="uicc-button uicc-button--block uicc-button--primary">Button</a>

### Button (big)
  
    @example
    <a class="uicc-button uicc-button--big uicc-button--primary">Button</a>

### Button (with text and icon left)

    @example
    <a class="uicc-button uicc-button--primary">
        <svg class="uicc-button__icon uicc-button__icon--left uicc-icon"><use xlink:href="./assets/icons.svg#arrow-left"></use></svg>
        Button
    </a>

### Button (text and icon right)
  
    @example
    <a class="uicc-button uicc-button--primary">
        Button
        <svg class="uicc-button__icon uicc-button__icon--right uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
    </a>

### Button (icon only)
  
    @example
    <a class="uicc-button uicc-button--primary uicc-button--icon">
        <svg class="uicc-button__icon uicc-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
    </a>
    <a class="uicc-button uicc-button--secondary uicc-button--icon">
        <svg class="uicc-button__icon uicc-icon"><use xlink:href="./assets/icons.svg#clear"></use></svg>
    </a>
