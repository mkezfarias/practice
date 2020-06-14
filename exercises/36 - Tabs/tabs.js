const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');
const tabPanelsArray = Array.from(tabPanels);

function handleTabClick(e) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark as unselected
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false);
  });
  // mark this tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // find the associated tab panel and show it
  const { id } = e.currentTarget;
  // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"`);
  // tabPanel.hidden = false;
  const tabPanel = tabPanelsArray.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
