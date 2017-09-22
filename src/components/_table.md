###Table

### Table (highlighted rows and images):
    @example
    <table class="uicc-table uicc-table--striped uicc-table--block uicc-table--responsiveSmallDown">
       <thead>
           <tr class="uicc-table__row">
               <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--contentAsResponsiveHeadline"></th>
               <th class="uicc-table__cell uicc-table__cell--headline">Col A</th>
               <th class="uicc-table__cell uicc-table__cell--headline">Col B</th>
               <th class="uicc-table__cell uicc-table__cell--headline">Col C</th>
               <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--centered">Star</th>
               <th class="uicc-table__cell uicc-table__cell--headline"></th>
               <th class="uicc-table__cell uicc-table__cell--headline">Edit</th>
           </tr>
       </thead>
       <tbody>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--headlineRow uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 1</td>
               <td class="uicc-table__cell" data-uicc-th="Col A">Cell 1 - a</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 1 - b</td>
               <td class="uicc-table__cell" data-uicc-th="Col C">Cell 1 - c</td>
               <td class="uicc-table__cell uicc-table__cell--centered" data-uicc-th="Star"><span class="uicc-icon uicc-icon--primary uicc-icon--emptyStar"></span></td>
               <td class="uicc-table__cell uicc-table__cell--image" data-uicc-th="Bild">
                    <img src="http://placehold.it/110x80/1cdcb5/fff">
               </td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                    <a href="javascript:;" class="uicc-table__action" title="edit">
                        <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                    </a>
                    <a href="javascript:;" class="uicc-table__action" title="delete">
                        <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                    </a>
               </td>
           </tr>
           <tr class="uicc-table__row uicc-table__row--highlighted">
               <td class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--headlineRow uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Highlight 2</td>
               <td class="uicc-table__cell" data-uicc-th="Col A">Cell 2 - a</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 2 - b</td>
               <td class="uicc-table__cell" data-uicc-th="Col C">Cell 2 - c</td>
               <td class="uicc-table__cell uicc-table__cell--centered" data-uicc-th="Star"><span class="uicc-icon uicc-icon--primary uicc-icon--filledStar"></span></td>
               <td class="uicc-table__cell uicc-table__cell--image" data-uicc-th="Bild">
                    <img src="http://placehold.it/110x80/f54a2b/fff">
               </td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                   <a href="javascript:;" class="uicc-table__action" title="edit">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--headlineRow uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 3</td>
               <td class="uicc-table__cell" data-uicc-th="Col A">Cell 3 - a</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 3 - b</td>
               <td class="uicc-table__cell" data-uicc-th="Col C">Cell 3 - c</td>
               <td class="uicc-table__cell uicc-table__cell--centered" data-uicc-th="Star"><span class="uicc-icon uicc-icon--primary uicc-icon--emptyStar"></span></td>
               <td class="uicc-table__cell uicc-table__cell--image" data-uicc-th="Bild">
                    <img src="http://placehold.it/110x80/005AFF/fff">
               </td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                   <a href="javascript:;" class="uicc-table__action" title="edit">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--headlineRow uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Longer Headline</td>
               <td class="uicc-table__cell" data-uicc-th="Col A">Cell 4 - a</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 3 - b</td>
               <td class="uicc-table__cell" data-uicc-th="Col C">Cell 3 - c</td>
               <td class="uicc-table__cell uicc-table__cell--centered" data-uicc-th="Star"><span class="uicc-icon uicc-icon--primary uicc-icon--emptyStar"></span></td>
               <td class="uicc-table__cell uicc-table__cell--image" data-uicc-th="Bild">
                    <img src="http://placehold.it/110x80/00E6E6/000">
               </td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                   <a href="javascript:;" class="uicc-table__action" title="edit">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--headlineRow uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 5</td>
               <td class="uicc-table__cell" data-uicc-th="Col A">Cell 5 - a</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 3 - b</td>
               <td class="uicc-table__cell" data-uicc-th="Col C">Cell 3 - c</td>
               <td class="uicc-table__cell uicc-table__cell--centered" data-uicc-th="Star"><span class="uicc-icon uicc-icon--primary uicc-icon--emptyStar"></span></td>
               <td class="uicc-table__cell uicc-table__cell--image" data-uicc-th="Bild">
                    <img src="http://placehold.it/110x80">
               </td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                   <a href="javascript:;" class="uicc-table__action" title="edit">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
       </tbody>
    </table>



### Table (bordered):

    @example
    <table class="uicc-table uicc-table--bordered uicc-table--block uicc-table--responsiveSmallDown">
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
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
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
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 3</td>
               <td class="uicc-table__cell" data-uicc-th="Col A">Cell 3 - a</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 3 - b</td>
               <td class="uicc-table__cell uicc-table__cell--highlighted" data-uicc-th="Col C">Cell 3 - c (highlighted)</td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                   <a href="javascript:;" class="uicc-table__action" title="edit">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
       </tbody>
    </table>

### Table (hover rows):

Add `uicc-table--hover` class to the `table` element to highlight rows on hover.

Add `is-highlighted` or `is-softHighlighted` class to a `td` element to make it visually highlighted.

    @example
    <table class="uicc-table uicc-table--hover uicc-table--block uicc-table--responsiveSmallDown">
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
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 2</td>
               <td class="uicc-table__cell is-softHighlighted" data-uicc-th="Col A">Cell 2 - a (soft highlighted)</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 2 - b</td>
               <td class="uicc-table__cell" data-uicc-th="Col C">Cell 2 - c</td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                   <a href="javascript:;" class="uicc-table__action" title="edit">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
           <tr class="uicc-table__row">
               <td class="uicc-table__cell uicc-table__cell--contentAsResponsiveHeadline" data-uicc-th="Headline">Headline 3</td>
               <td class="uicc-table__cell" data-uicc-th="Col A">Cell 3 - a</td>
               <td class="uicc-table__cell" data-uicc-th="Col B">Cell 3 - b</td>
               <td class="uicc-table__cell is-highlighted" data-uicc-th="Col C">Cell 3 - c (highlighted)</td>
               <td class="uicc-table__cell uicc-table__cell--actions uicc-table__cell--noResponsiveHeadline">
                   <a href="javascript:;" class="uicc-table__action" title="edit">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
       </tbody>
    </table>

### Table (compact):

Add `uicc-table--compact` class to render the table more compact

    @example
    <table class="uicc-table uicc-table--compact uicc-table--block uicc-table--responsiveSmallDown">
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
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
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
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
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
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#edit"></use></svg>
                   </a>
                   <a href="javascript:;" class="uicc-table__action" title="delete">
                       <svg class="uicc-icon uicc-icon--hoverPrimary"><use xlink:href="#delete"></use></svg>
                   </a>
               </td>
           </tr>
       </tbody>
    </table>
