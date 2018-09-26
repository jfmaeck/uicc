## Collapsible

The collapsible component comes with no special styling in order to be used as a foundation for more opinionated components e.g. Accordion.

### Collapsible (collapsed)

Toggle the class `is-open` open/close the collapsible content

    @example
    <div class="uicc-collapsible is-open">
        <div class="uicc-collapsible__statefulVisibility uicc-clickable" onclick="this.parentElement.classList.toggle('is-open')">
           <span class="uicc-collapsible__statefulVisibility uicc-collapsible__statefulVisibility--collapsed">
             <svg class="uicc-icon"><use xlink:href="./assets/icons.svg#arrow-down"></use></svg>
           </span>
           <span class="uicc-collapsible__statefulVisibility uicc-collapsible__statefulVisibility--open">
             <svg class="uicc-icon"><use xlink:href="./assets/icons.svg#arrow-up"></use></svg>
           </span>
           Collapsible Header
        </div>
        <div class="uicc-collapsible__content uicc-collapsible__content--fade">
           Collapsible Content
        </div>
    </div>
