export async function POST(request: Request) {
  try {
    const requestBody = await request.json();
    console.log('request body', requestBody);
    return new Response(JSON.stringify({ result: 'success' }));
  } catch (e) {
    console.log(e);

    return new Response(JSON.stringify({result: 'error' }), { status: 500 });
  }
}