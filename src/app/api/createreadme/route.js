import template from "@/app/lib/template";
import { NextResponse } from "next/server";
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from "node-html-markdown";
const fsp = require("fs/promises");

export async function POST(request) {
  const body = await request.json();
  const doc = template(body);

  //await fsp.writeFile("./tmp/README.md", doc);

  return Response.json({
    mdCode: doc,
  });
}
