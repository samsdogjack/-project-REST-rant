const React = require("react");
const Def = require("../default");

function new_form() {
  return (
    <Def>
      <main>
        <h1>Add a new place</h1>
        <form method="POST" action="/places">
          <div>
            <label html For="name">Place Name</label>
            <input id="name" name="name" />
              Place Name
              <input />{" "}
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form;
