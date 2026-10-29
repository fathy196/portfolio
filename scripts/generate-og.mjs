// Regenerates public/og.png (social preview image). Run: node scripts/generate-og.mjs
import { writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/dist/compiled/@vercel/og/index.node.js";

const name = "Fathy Abdelkader";
const line = "Backend Developer · PHP · Laravel · REST APIs";
const location = "Egypt";

const image = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        color: "#fff",
        background: "linear-gradient(160deg, #0f7a8a 0%, #0f4c5c 45%, #0b2e3a 100%)",
      },
    },
    h("div", { style: { fontSize: 28, letterSpacing: 6, textTransform: "uppercase", opacity: 0.75 } }, "Portfolio"),
    h("div", { style: { fontSize: 88, fontWeight: 700, marginTop: 16 } }, name),
    h("div", { style: { width: 140, height: 4, background: "rgba(255,255,255,0.6)", margin: "28px 0" } }),
    h("div", { style: { fontSize: 42, opacity: 0.92 } }, line),
    h("div", { style: { fontSize: 30, opacity: 0.7, marginTop: 20 } }, location),
  ),
  { width: 1200, height: 630 },
);

await writeFile("public/og.png", Buffer.from(await image.arrayBuffer()));
console.log("wrote public/og.png");
