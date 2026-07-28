const securityPolicy = `Contact: mailto:contacto@automotoraprime.cl
Expires: 2027-07-27T23:59:59.000Z
Preferred-Languages: es, en
Canonical: https://automotoraprime.cl/.well-known/security.txt
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(securityPolicy, {
    headers: {
      "Cache-Control": "public, max-age=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
