import { test } from "tap";
import { receiverHandle as receive } from "../../pkg/dist-src/event-handler/receive";

const state = {
  secret: "mysecret",
  hooks: {},
};

test("options: none", (t) => {
  t.throws(() => {
    receive(state);
  });
  t.end();
});

test("options: name", (t) => {
  t.throws(() => {
    receive(state, { name: "foo" });
  });
  t.end();
});

test("options: name, payload", (t) => {
  t.doesNotThrow(() => {
    receive(state, { name: "foo", payload: {} });
  });
  t.end();
});
