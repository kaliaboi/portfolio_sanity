import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "izq4cj1k",
  dataset: "production",
  title: "Portfolio",
  apiVersion: "2023-06-15",
  basePath: "/admin",
  plugins: [deskTool(), codeInput()],
  schema: { types: schemas },
});

export default config;
