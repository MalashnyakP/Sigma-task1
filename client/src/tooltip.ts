class Tooltip extends HTMLElement {
    constructor() {
        super();
  
        const shadow = this.attachShadow({mode: 'open'});
  
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
  
        const info = document.createElement('div');
        info.setAttribute('class', 'info');
  
        const tooltip = document.createElement('div');
        tooltip.setAttribute('class', 'tooltip');
  
        const tooltipText = this.getAttribute('tooltip-text');
        tooltip.textContent = tooltipText;
  
        const infoText = this.getAttribute('visible-text');
        info.textContent = infoText;

        const style = document.createElement('style');
  
        style.textContent = `
            .wrapper {
                position: relative;
                
            }
  
            .tooltip {
                visibility: hidden;
                background: #e8e8e8;
                color: #6e6e6e;
                text-align: center;
                border-radius: 6px;
                padding: 5px 8px;
            
                position: absolute;
                z-index: 3;
                top: 100%;
                left: 0%;
                margin-left: 0px;
            }

            .info {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
  
            .info:hover + .tooltip, .info:focus + .tooltip {
                visibility: visible;
            }
        `;
  
        shadow.appendChild(style);

        shadow.appendChild(wrapper);
        wrapper.appendChild(info);
        wrapper.appendChild(tooltip);
    }

    connectedCallback() {
        const infoText = this.shadowRoot?.querySelector('.info');
        if (infoText) {
            infoText.textContent = this.getAttribute('visible-text');
        }

        const tooltip = this.shadowRoot?.querySelector('.tooltip');
        if (tooltip) {
            tooltip.textContent = this.getAttribute('tooltip-text');
        }
    }
}

  
customElements.define('my-tooltip', Tooltip);
