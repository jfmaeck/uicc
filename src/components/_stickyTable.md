## Sticky Table

The Sticky Table component enhances the existing table component with the capability to make EITHER the first column OR the header rows sticky.
The remaining columns/rows then will be scrollable if they do not fit into the available space.

Each table cell requires the class `uicc-stickyTable__cell`.


### Table (sticky column):
Add the class `uicc-stickyTable--column` to make the table horizontally scrollable while fixing the first column.

Specify the width of the sticky column by applying the classes `uicc-stickyTable--stickyColumnWidth-50`, `uicc-stickyTable--stickyColumnWidth-60`, ... `uicc-stickyTable--stickyColumnWidth-100`, `uicc-stickyTable--stickyColumnWidth-150`, ... `uicc-stickyTable--stickyColumnWidth-700`

If the height of the sticky columns differs from the height of the non-sticky columns then you should set an explicit height at the row level by applying the classes `uicc-table__row--35`, `uicc-table__row--40`, ... `uicc-table__row--120`

    @example
    <div class="uicc-stickyTable uicc-stickyTable--column uicc-stickyTable--stickyColumnWidth-100">
      <div class="uicc-stickyTable__scroller">
        <table class="uicc-table uicc-table--bordered">
           <thead>
               <tr class="uicc-table__row">
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline">Headline</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline">A Text</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">B Num</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">C Num</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">D</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">E</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">F</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">G</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">H</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">I</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">J</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">K</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">L with long column title</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">M</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">N</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">O</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">P</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">Q</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">R</th>
               </tr>
           </thead>
           <tbody>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 1</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 1 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 2</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 2 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 3 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>


### Table (multiple sticky columns):

The sticky table only supports making the first column sticky.
If you need to have more than one sticky columns then you can create a `uicc-stickyTable__subTable` table within the first column. 

You also need to specify the width of the sub table columns by applying the classes `uicc-table__cell--20`, `uicc-table__cell--25`, ... `uicc-table__cell--700` to make sure that all sub tables share the same dimensions. 

    @example
    <div class="uicc-stickyTable uicc-stickyTable--column uicc-stickyTable--stickyColumnWidth-300">
      <div class="uicc-stickyTable__scroller">
        <table class="uicc-table uicc-table--bordered">
           <thead>
               <tr class="uicc-table__row">
                   <th class="uicc-stickyTable__cell">
                       <table class="uicc-stickyTable__subTable uicc-table">
                          <tr class="uicc-table__row">
                            <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--150">Headline</th>
                            <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--75">Sticky 2</th>
                            <th class="uicc-table__cell uicc-table__cell--headline uicc-table__cell--75">Sticky 3</th>
                          </tr>                           
                       </table>
                   </th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline">A Text</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">B Num</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">C Num</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">D</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">E</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">F</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">G</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">H</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">I</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">J</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">K</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">L with long column title</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">M</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">N</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">O</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">P</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">Q</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">R</th>
               </tr>
           </thead>
           <tbody>
               <tr class="uicc-table__row uicc-table__row">
                   <td class="uicc-stickyTable__cell">
                      <table class="uicc-stickyTable__subTable uicc-table">
                         <tr class="uicc-table__row">
                           <td class="uicc-table__cell uicc-table__cell--150 uicc-text uicc-text--bold">Headline 1</tD>
                           <td class="uicc-table__cell uicc-table__cell--75">live</td>
                           <td class="uicc-table__cell uicc-table__cell--75">120.000</td>
                         </tr>                           
                      </table>
                   </td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 1 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell">
                      <table class="uicc-stickyTable__subTable uicc-table">
                         <tr class="uicc-table__row">
                           <td class="uicc-table__cell uicc-table__cell--150 uicc-text uicc-text--bold">Headline 2</tD>
                           <td class="uicc-table__cell uicc-table__cell--75">live</td>
                           <td class="uicc-table__cell uicc-table__cell--75">95.000</td>
                         </tr>                           
                      </table>
                   </td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 2 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell">
                      <table class="uicc-stickyTable__subTable uicc-table">
                         <tr class="uicc-table__row">
                           <td class="uicc-table__cell uicc-table__cell--150 uicc-text uicc-text--bold">Headline 3</tD>
                           <td class="uicc-table__cell uicc-table__cell--75">pending</td>
                           <td class="uicc-table__cell uicc-table__cell--75">120.000</td>
                         </tr>                           
                      </table>
                   </td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 3 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>


### Table (sticky last column):

Add the class `uicc-stickyTable--lastColumn` to make the table horizontally scrollable while fixing the first column.
Specify the width of the last sticky column by applying the classes `uicc-stickyTable--stickyLastColumnWidth-50`, `uicc-stickyTable--stickyColumnWidth-60`, ... `uicc-stickyTable--stickyColumnWidth-100`

The sticky last column can also be combined with the sticky first column (the default)

    @example
    <div class="uicc-stickyTable uicc-stickyTable--column uicc-stickyTable--lastColumn uicc-stickyTable--stickyColumnWidth-100 uicc-stickyTable--stickyLastColumnWidth-50">
      <div class="uicc-stickyTable__scroller">
        <table class="uicc-table uicc-table--bordered">
           <thead>
               <tr class="uicc-table__row">
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline">Headline</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline">A Text</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">B Num</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">C Num</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">D</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">E</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">F</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">G</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">H</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">I</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">J</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">K</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">L with long column title</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">M</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">N</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">O</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">P</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">Q</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--numeric">R</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--headline uicc-table__cell--actions uicc-table__cell--separatorLeft">&nbsp;</th>
               </tr>
           </thead>
           <tbody>
               <tr class="uicc-table__row uicc-table__row--45">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 1</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 1 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--actions uicc-table__cell--separatorLeft">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary uicc-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                   </td>
               </tr>
               <tr class="uicc-table__row uicc-table__row--45">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 2</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 2 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--actions uicc-table__cell--separatorLeft">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary uicc-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                   </td>
               </tr>
               <tr class="uicc-table__row uicc-table__row--45">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell">Cell 3 - a</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">0</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--actions uicc-table__cell--separatorLeft">
                     <a href="javascript:;" class="uicc-table__action" title="edit">
                         <svg class="uicc-icon uicc-icon--hoverPrimary uicc-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                   </td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>


### Table (sticky header):

Add the class `uicc-stickyTable--row` to make the table vertically scrollable while fixing the header.

You also need to restrict the height of the table (e.g. `style="height: 300px;"`).

Specify the height of the sticky header by applying the classes `uicc-stickyTable--stickyHeaderHeight-20`, `uicc-stickyTable--stickyHeaderHeight-25`, `uicc-stickyTable--stickyHeaderHeight-30` ... `uicc-stickyTable--stickyHeaderHeight-300`

Make sure that the cells in the header have the same width as the cells in the body by applying the appropriate table cell modifiers (`uicc-table__cell--20`, `uicc-table__cell--30` etc.).

    @example
    <div class="uicc-stickyTable uicc-stickyTable--header uicc-stickyTable--stickyHeaderHeight-35" style="height: 300px">
      <div class="uicc-stickyTable__scroller">
        <table class="uicc-table uicc-table--bordered">
           <thead class="uicc-stickyTable__header">
               <tr class="uicc-table__row">
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell uicc-table__cell--150 uicc-table__cell--headline">Headline</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120 uicc-table__cell--headline">A Text</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--headline uicc-table__cell--numeric">B Numeric</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--headline uicc-table__cell--numeric">C</th>
                   <th class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--headline uicc-table__cell--numeric">D</th>
               </tr>
           </thead>
           <tbody>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--150 uicc-text uicc-text--bold">Headline 1</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell--120 uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">4323.46</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">192.565</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">4323.46</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 2</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">10107.43</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">667.01</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">10107.43</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
               <tr class="uicc-table__row">
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-text uicc-text--bold">Headline 3</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--120">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">1001.24</td>
                   <td class="uicc-stickyTable__cell uicc-table__cell uicc-table__cell--80 uicc-table__cell--numeric">980.20</td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>
