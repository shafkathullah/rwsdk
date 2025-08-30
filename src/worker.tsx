import { defineApp } from "rwsdk/worker";
import { render, route } from "rwsdk/router";

import { Document } from "@/app/Document";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { Contact } from "@/app/pages/Contact";
import { Students } from "@/app/pages/Students";
import { Animals } from "@/app/pages/Animals";
import { Fruits } from "@/app/pages/Fruits";
import { setCommonHeaders } from "@/app/headers";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    route("/", Home),
    route("/about", About),
    route("/contact", Contact),
    route("/students", Students),
    route("/animals", Animals),
    route("/fruits", Fruits),
  ]),
]);
