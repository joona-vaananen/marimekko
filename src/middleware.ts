import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  if (process.env.NODE_ENV === 'production' && !isAuthenticated(request)) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }

  return NextResponse.next();
};

const isAuthenticated = (request: NextRequest) => {
  const authorizationHeader = request.headers.get('Authorization');

  if (!authorizationHeader) {
    return false;
  }

  const [username, password] = Buffer.from(
    authorizationHeader.split(' ')[1],
    'base64'
  )
    .toString()
    .split(':');

  if (
    username === process.env.APP_BASIC_AUTH_USERNAME &&
    password === process.env.APP_BASIC_AUTH_PASSWORD
  ) {
    return true;
  }

  return false;
};
