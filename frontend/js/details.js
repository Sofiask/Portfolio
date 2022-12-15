export function plotTools(tools, container) {
    const toolsContainer = document.getElementById(container);
    tools.map(tool => {
      const spanEl = document.createElement('span');
      spanEl.textContent = `${tool.developmentTools}`;
      toolsContainer.append(spanEl);
    })
  }

export function plotManagement(managements, container) {
    const managementContainer = document.getElementById(container);
    managements.map (management => {
        const spanEl = document.createElement('span');
        spanEl.textContent = `${management.projectManagement}`;
        managementContainer.append(spanEl);
    });
}

export function plotDesign(designs, container) {
    const designContainer = document.getElementById(container);
    designs.map (design => {
        const spanEl = document.createElement('span');
        spanEl.textContent = `${design.software}`;
        designContainer.append(spanEl);
    })
}

export function plotDelivery(deliveries, container) {
    const deliveryDetailsContainer = document.getElementById(container);
    deliveries.map (delivery => {
        const spanEl = document.createElement('span');
        spanEl.textContent = `${delivery.delivery}`;
        deliveryDetailsContainer.append(spanEl);
    } )
}

export function plotLinks(links, container) {
    const linksContainer = document.getElementById(container);
    links.map(link => {
      const linkEl = document.createElement('a');
      linkEl.setAttribute('href', link);
      linkEl.setAttribute('target', '_blank');
      linkEl.textContent = link;
      linksContainer.append(linkEl)
    });
  }

