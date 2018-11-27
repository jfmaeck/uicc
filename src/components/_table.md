## Table

You can force full-width tables by adding the `uicc-table--block` modifier to the table element.

Add the `uicc-table__cell--numeric` modifier to table cells containing numeric values.

Wrap tables in a (figure) element with the class `uicc-tableWrapper` to add a nice background (that also fills the whitespace at the righthand side of narrow tables)

### Table (bordered):

    @example
    <figure class="uicc-tableWrapper">
      <table class="uicc-table uicc-table--data uicc-table--bordered uicc-table--responsiveSmallDown">
         <thead>
             <tr class="uicc-table__row">
                 <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">A Text</th>
                 <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">B Num</th>
                 <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">C Num</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 1</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A (text)">Cell 1 - a</td>
                 <td class="uicc-table__cell uicc-table__cell--numeric" data-uicc-th="Col B (numeric)">4323.46</td>
                 <td class="uicc-table__cell uicc-table__cell--numeric" data-uicc-th="Col C (numeric)">192.565</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 2</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A (text)">Cell 2 - a</td>
                 <td class="uicc-table__cell uicc-table__cell--numeric" data-uicc-th="Col B (numeric)">10107.43</td>
                 <td class="uicc-table__cell uicc-table__cell--numeric" data-uicc-th="Col C (numeric)">667.01</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 3</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A (text)">Cell 3 - a</td>
                 <td class="uicc-table__cell uicc-table__cell--numeric" data-uicc-th="Col B (numeric)">980.20</td>
                 <td class="uicc-table__cell uicc-table__cell--numeric" data-uicc-th="Col C (numeric)">1001.24</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--highlight uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 3</td>
                 <td class="uicc-table__cell uicc-table__cell--highlight" data-uicc-th="Col A (text)">Cell 3 - a</td>
                 <td class="uicc-table__cell uicc-table__cell--highlight uicc-table__cell--numeric" data-uicc-th="Col B (numeric)">980.20</td>
                 <td class="uicc-table__cell uicc-table__cell--highlight uicc-table__cell--numeric" data-uicc-th="Col C (numeric)">1001.24</td>
                 <td class="uicc-table__cell uicc-table__cell--highlight uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>

### Table (hover rows):

Add `uicc-table--hover` class to the `table` element to highlight rows on hover.

    @example
    <figure class="uicc-tableWrapper">
      <table class="uicc-table uicc-table--data uicc-table--hover uicc-table--responsiveSmallDown">
         <thead>
             <tr class="uicc-table__row">
                 <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Col A</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Col B</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Col C</th>
                 <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--separatorLeft">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 1</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A">Cell 1 - a</td>
                 <td class="uicc-table__cell" data-uicc-th="Col B">Cell 1 - b</td>
                 <td class="uicc-table__cell" data-uicc-th="Col C">Cell 1 - c</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline uicc-table__cell--separatorLeft">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 2</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A">Cell 2 - a</td>
                 <td class="uicc-table__cell" data-uicc-th="Col B">Cell 2 - b</td>
                 <td class="uicc-table__cell" data-uicc-th="Col C">Cell 2 - c</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline uicc-table__cell--separatorLeft">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 3</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A">Cell 3 - a</td>
                 <td class="uicc-table__cell" data-uicc-th="Col B">Cell 3 - b</td>
                 <td class="uicc-table__cell" data-uicc-th="Col C">Cell 3 - c</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline uicc-table__cell--separatorLeft">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>

### Table (compact):

Add `uicc-table--compact` class to render the table more compact

    @example
    <figure class="uicc-tableWrapper">
      <table class="uicc-table uicc-table--data uicc-table--compact uicc-table--responsiveSmallDown">
         <thead>
             <tr class="uicc-table__row">
                 <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Col A</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Col B</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Col C</th>
                 <th class="uicc-table__cell uicc-table__cell--headline">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 1</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A">Cell 1 - a</td>
                 <td class="uicc-table__cell" data-uicc-th="Col B">Cell 1 - b</td>
                 <td class="uicc-table__cell" data-uicc-th="Col C">Cell 1 - c</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 2</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A">Cell 2 - a</td>
                 <td class="uicc-table__cell" data-uicc-th="Col B">Cell 2 - b</td>
                 <td class="uicc-table__cell" data-uicc-th="Col C">Cell 2 - c</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="uicc-table__row">
                 <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 3</td>
                 <td class="uicc-table__cell" data-uicc-th="Col A">Cell 3 - a</td>
                 <td class="uicc-table__cell" data-uicc-th="Col B">Cell 3 - b</td>
                 <td class="uicc-table__cell" data-uicc-th="Col C">Cell 3 - c</td>
                 <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="uicc-table__action" title="delete">
                         <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>
