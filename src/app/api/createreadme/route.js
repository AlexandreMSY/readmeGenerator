import template from "@/app/lib/template";
import { NextResponse } from "next/server";
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from 'node-html-markdown'
const fs = require('fs')

export async function POST(request) {
  const body = await request.json();

  const doc = template(body)
  
  const writeStream = fs.createWriteStream('test.md')
  writeStream.write(doc)
  writeStream.end()
  
  return NextResponse.json(body);
}
