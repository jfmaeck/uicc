## Off Canvas

    @example
    <div class="uicc-offCanvas uicc-row" id="off-canvas-demo" style="height: 600px;">
        <div class="uicc-offCanvas__inner">
            <div class="uicc-offCanvas__on uicc-region uicc-region--secondary">
                Main Content
            </div>
            <div class="uicc-offCanvas__off uicc-offCanvas__off--left uicc-region uicc-region--primary">
                Left Off Canvas Content
            </div>
            <div class="uicc-offCanvas__off uicc-offCanvas__off--right uicc-region uicc-region--primary">
                Right Off Canvas Content
            </div>
            <div class="uicc-offCanvas__off uicc-offCanvas__off--bottom uicc-region uicc-region--primary">
                Bottom Off Canvas Content
            </div>
        </div>
    </div>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-right', 'is-open-bottom');document.getElementById('off-canvas-demo').classList.toggle('is-open-left');">Toggle left pane</button>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-left', 'is-open-bottom');document.getElementById('off-canvas-demo').classList.toggle('is-open-right');">Toggle right pane</button>
    <button class="uicc-button uicc-button--primary" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-left', 'is-open-right');document.getElementById('off-canvas-demo').classList.toggle('is-open-bottom');">Toggle bottom pane</button>
