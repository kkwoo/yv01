import m from 'mithril';

const firstMC = {
  view: function(vnode) {
    const result = [
      m("input", {
        type: "date",
        class: "grid-input01a"
      }),
      m("input", {
        type: "time",
        class: "grid-input01b"
      }),
      m("button", {class: "grid-button01a"}, "0"),
      m("input", {
        type: "date",
        class: "grid-input02a"
      }),
      m("input", {
        type: "time",
        class: "grid-input02b"
      }),
      m("button", {class: "grid-button02a"}, "1"),
      m("button", {class: "grid-button02b"}, "2"),
      m("button", {}, "3"),
      m("button", {}, "3"),
      m("button", {}, "3"),
      m("button", {}, "3"),
      m("button", {}, "3"),
      m("button", {}, "3"),
      m("button", {}, "3"),
      m("button", {}, "3"),

  ]; // .map(x => m("div", {class: ""}, x));
    return(result);
  }
};

export { firstMC };