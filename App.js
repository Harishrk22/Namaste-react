/*
    <div class="parent">
        <div class="child1">
            <h1>h1 tag </h1>
            <h2> h2 tag </h2>
        </div>
        <div class="child2">
            <h1>h1 tag </h1>
            <h2> h2 tag </h2>
        </div>
    </div>
*/

const heading = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child1" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", { class: "child2" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
