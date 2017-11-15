## Responsive Utilities

### Responsive Visibility Classes:

    @example
    <table class="uicc-table uicc-table--bordered">
       <thead>
           <tr class="uicc-table__row">
               <th class="uicc-table__cell uicc-table__cell--headline"></th>
               <th class="uicc-table__cell uicc-table__cell--headline">visible</th>
           </tr>
       </thead>
       <tbody>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-tiny</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-tiny uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-tiny-up</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-tiny-up uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-small-down</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-small-down uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-small</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-small uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-small-up</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-small-up uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>

           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-medium-down</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-medium-down uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-medium</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-medium uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-medium-up</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-medium-up uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>

           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-large-down</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-large-down uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-large</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-large uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-large-up</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-large-up uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>

           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-xlarge-down</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-xlarge-down uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-xlarge</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-xlarge uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-xlarge-up</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-xlarge-up uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-screen</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-screen uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline">uicc-hidden-print</td>
               <td class="uicc-table__cell">
                  <svg class="uicc-hidden-print uicc-uicc-icon"><use xlink:href="#visibility-on"></use></svg>
               </td>
           </tr>
       </tbody>
    </table>


### Scss Media Query Breakpoint variables

Commonly used media query conditions exposed as scss variables:
`$uicc-tiny-only`
`$uicc-tiny-up`
`$uicc-small-only`
`$uicc-small-up`
`$uicc-medium-only
`$uicc-medium-up`
`$uicc-large-only`
`$uicc-large-up`
