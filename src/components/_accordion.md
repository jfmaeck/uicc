## Accordion

Accordions rely on the lower-level `uicc-collapsible` component.
This is why you have to tooggle the `is-open` switch two times: 
On the `uicc-accorion__item` element and on it's child `uicc-collapsible` element. 

    @example
    <div class="uicc-accordion">
        <div class="uicc-accordion__item">
            <div class="uicc-accordion__itemHeader uicc-postfix uicc-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.uicc-collapsible').classList.toggle('is-open')">
               <span class="uicc-accordion__itemHeadline uicc-postfix__fluid uicc-col">Accordion Item 1</span>
               <svg class="uicc-accordion__itemIcon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="uicc-collapsible">
                <div class="uicc-accordion__itemContent uicc-collapsible__content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
        <div class="uicc-accordion__item is-open">
            <div class="uicc-accordion__itemHeader uicc-postfix uicc-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.uicc-collapsible').classList.toggle('is-open')">
               <span class="uicc-accordion__itemHeadline uicc-postfix__fluid uicc-col">Accordion Item 2</span>
               <svg class="uicc-accordion__itemIcon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="uicc-collapsible is-open">
                <div class="uicc-accordion__itemContent uicc-collapsible__content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
        <div class="uicc-accordion__item">
            <div class="uicc-accordion__itemHeader uicc-postfix uicc-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.uicc-collapsible').classList.toggle('is-open')">
               <span class="uicc-accordion__itemHeadline uicc-postfix__fluid uicc-col">Long Content</span>
               <svg class="uicc-accordion__itemIcon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="uicc-collapsible">
                <div class="uicc-accordion__itemContent uicc-collapsible__content">
                    <p class="uicc-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p class="uicc-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p class="uicc-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p class="uicc-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p class="uicc-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p class="uicc-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    <p class="uicc-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        <div class="uicc-accordion__item">
            <div class="uicc-accordion__itemHeader uicc-postfix uicc-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.uicc-collapsible').classList.toggle('is-open')">
               <span class="uicc-accordion__itemHeadline uicc-postfix__fluid uicc-col">Long Header item name Lorem ipsum dolor sit amet</span>
               <svg class="uicc-accordion__itemIcon uicc-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="uicc-collapsible">
                <div class="uicc-accordion__itemContent uicc-collapsible__content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
    </div>
