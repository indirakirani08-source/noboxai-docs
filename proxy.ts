import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { docsContentRoute, docsRoute } from '@/lib/shared';

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);

const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.mdx`,
  `${docsContentRoute}{/*path}/content.md`,
);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/id/docs';
    return NextResponse.redirect(url);
  }

  const resultSuffix = rewriteSuffix(pathname);
  if (resultSuffix) {
    return NextResponse.rewrite(new URL(resultSuffix, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const resultDocs = rewriteDocs(pathname);

    if (resultDocs) {
      return NextResponse.rewrite(new URL(resultDocs, request.nextUrl));
    }
  }

  return NextResponse.next();
}