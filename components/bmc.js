(function () {

  if (window.bmcLoaded) return;
  window.bmcLoaded = true;

  function loadWidget() {

    const script = document.createElement("script");

    script.src =
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";

    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");

    script.setAttribute("data-id", "ViquinhoDev");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute("data-message", "support me");
    script.setAttribute("data-color", "#BD5FFF");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");

    document.body.appendChild(script);
  }

  window.addEventListener("load", loadWidget);

})();
