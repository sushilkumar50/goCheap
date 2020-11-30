if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // navigator.serviceWorker
    //   .register("./sw_cached_pages.js")
    //   .then((reg) => console.log("registered"))
    //   .catch((err) => {
    //     console.log("err", err);
    //   });

    navigator.serviceWorker
      .register("./sw_cached_site.js")
      .then((reg) => console.log("registered"))
      .catch((err) => {
        console.log("err", err);
      });
  });
}
