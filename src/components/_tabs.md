## Tabs

If you do not want to update the contents of the `uicc-tabs__content` element dynamically then 
you can add multiple elements with the class `uicc-tabs__content` and only the one with the class 
`is-active` will be shown. 

    @example
    <div class="uicc-tabs">
        <div class="uicc-tabs__headers uicc-row uicc-row--bigMargin">
            <a class="uicc-tabs__tab" href="javascript:;">Tab 1</a>
            <a class="uicc-tabs__tab" href="javascript:;">Tab 1</a>
            <a class="uicc-tabs__tab is-active" href="javascript:;">2nd Tab</a>
            <a class="uicc-tabs__tab" href="javascript:;">Third Tab</a>
            <a class="uicc-tabs__tab" href="javascript:;">Another One!</a>
        </div>
        <div class="uicc-tabs__content is-active">
            Tab Content
        </div>
    </div>
