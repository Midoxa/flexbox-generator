function generateCSS() {
  const container = document.getElementById("flex-container");
  const items = container.getElementsByClassName("flex-item");

  const layout = document.getElementById("item-select").value;
  const direction = document.getElementById("flex-direction").value;
  const justify = document.getElementById("justify-content").value;
  const alignItems = document.getElementById("align-items").value;
  const alignContent = document.getElementById("align-content").value;
  const wrap = document.getElementById("flex-wrap").value;
  const leftOffset = document.getElementById("container-left").value;

  container.style.flexDirection = direction;
  container.style.justifyContent = justify;
  container.style.alignItems = alignItems;
  container.style.alignContent = alignContent;
  container.style.flexWrap = wrap;
  container.style.left = leftOffset;

  const order = document.getElementById("order").value;
  const flexGrow = document.getElementById("flex-grow").value;
  const flexShrink = document.getElementById("flex-shrink").value;
  const flexBasis = document.getElementById("flex-basis").value;
  const alignSelf = document.getElementById("align-self").value;
  const itemLeft = document.getElementById("item-left").value;

  let css = `
<span class="selector">.container</span> {
  <span class="property">display</span>: <span class="value">flex</span>;
  <span class="property">flex-direction</span>: <span class="value">${direction}</span>;
  <span class="property">justify-content</span>: <span class="value">${justify}</span>;
  <span class="property">align-items</span>: <span class="value">${alignItems}</span>;
  <span class="property">align-content</span>: <span class="value">${alignContent}</span>;
  <span class="property">flex-wrap</span>: <span class="value">${wrap}</span>;
  <span class="property">left</span>: <span class="value">${leftOffset}</span>;
}
<span class="selector">.item</span> {
  <span class="property">order</span>: <span class="value">${order}</span>;
  <span class="property">flex-grow</span>: <span class="value">${flexGrow}</span>;
  <span class="property">flex-shrink</span>: <span class="value">${flexShrink}</span>;
  <span class="property">flex-basis</span>: <span class="value">${flexBasis}</span>;
  <span class="property">align-self</span>: <span class="value">${alignSelf}</span>;
  <span class="property">left</span>: <span class="value">${itemLeft}</span>;
}`;

  if (layout !== "all") {
    const selectedClass = layout;
    for (const item of items) {
      if (item.classList.contains(selectedClass)) {
        item.style.order = order;
        item.style.flexGrow = flexGrow;
        item.style.flexShrink = flexShrink;
        item.style.flexBasis = flexBasis;
        item.style.alignSelf = alignSelf;
        item.style.left = itemLeft;
      }
    }
    css += `
<span class="selector">.${selectedClass}</span> {
  <span class="property">order</span>: <span class="value">${order}</span>;
  <span class="property">flex-grow</span>: <span class="value">${flexGrow}</span>;
  <span class="property">flex-shrink</span>: <span class="value">${flexShrink}</span>;
  <span class="property">flex-basis</span>: <span class="value">${flexBasis}</span>;
  <span class="property">align-self</span>: <span class="value">${alignSelf}</span>;
  <span class="property">left</span>: <span class="value">${itemLeft}</span>;
}`;
  } else {
    for (const item of items) {
      item.style.order = order;
      item.style.flexGrow = flexGrow;
      item.style.flexShrink = flexShrink;
      item.style.flexBasis = flexBasis;
      item.style.alignSelf = alignSelf;
      item.style.left = itemLeft;
    }
  }

  document.getElementById("generated-css").innerHTML = css;
}

function resetCSS() {
  document.getElementById("flex-direction").value = "row";
  document.getElementById("justify-content").value = "flex-start";
  document.getElementById("align-items").value = "stretch";
  document.getElementById("align-content").value = "stretch";
  document.getElementById("flex-wrap").value = "nowrap";
  document.getElementById("container-left").value = "auto";
  document.getElementById("item-select").value = "all";
  document.getElementById("order").value = "0";
  document.getElementById("flex-grow").value = "0";
  document.getElementById("flex-shrink").value = "1";
  document.getElementById("flex-basis").value = "auto";
  document.getElementById("align-self").value = "auto";
  document.getElementById("item-left").value = "auto";

  const container = document.getElementById("flex-container");
  const items = container.getElementsByClassName("flex-item");
  container.style.flexDirection = "row";
  container.style.justifyContent = "flex-start";
  container.style.alignItems = "stretch";
  container.style.alignContent = "stretch";
  container.style.flexWrap = "nowrap";
  container.style.left = "auto";

  for (const item of items) {
    item.style.order = "0";
    item.style.flexGrow = "0";
    item.style.flexShrink = "1";
    item.style.flexBasis = "auto";
    item.style.alignSelf = "auto";
    item.style.left = "auto";
  }

  document.getElementById("generated-css").innerHTML = "";
}

function copyCode() {
  const cssCode = document.getElementById("generated-css").innerText;
  navigator.clipboard.writeText(cssCode).then(() => {
    alert("CSS code copied to clipboard!");
  });
}

generateCSS();
