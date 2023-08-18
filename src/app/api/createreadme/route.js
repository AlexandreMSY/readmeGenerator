import { NextResponse } from "next/server";
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from 'node-html-markdown'

export async function POST(request) {
  const body = await request.json();
  /*const conv = NodeHtmlMarkdown.translate(
    body.aboutText
  )*/
  console.log(body);
  console.log(body.contributing);
  
  return NextResponse.json(body);
}
