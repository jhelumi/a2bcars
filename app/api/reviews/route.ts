import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const placeId = 'ChIJ5avO1XTudkgRrona1Z1b618'; // Google Place ID
  const apiKey = 'AIzaSyDpWTa3gx6iGEyLtxiMERRb9vZzwm811E0';

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&fields=reviews`;
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      },
    });

    if (res.ok) {
      const result = await res.json();
      return NextResponse.json(result);
    }
  } catch (e) {
    console.log('ERRRRR', e);
  }
}
