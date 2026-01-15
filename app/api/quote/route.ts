import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.json();
  console.log('Data Receieved:', data);
  /*if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 });
  }*/
  try {
    const page = await prisma.enquiry.create({
      data: {
        customerType: data.customerType,
        journeyType: data.journeyType,
        name: data.name,
        phone: data.phone,
        startLocation: data.startLocation,
        endLocation: data.endLocation,
        travelDate: new Date(data.travelDate).toISOString(),
        travelTime: data.travelTime,
        adults: data.adults,
        children: data.children,
        status: 'Open',
        userId: session.user.id,
      },
    });
    return NextResponse.json(page);
  } catch (error) {
    console.log('Error in submitting eqnuiry: ', error);
  }

  return NextResponse.json(
    { error: 'Error in submitting enquiry' },
    { status: 400 }
  );
}

export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log('Getting enquiries');
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const page = await prisma.enquiry.findMany({
      take: 10,
      orderBy: {
        travelDate: 'desc',
      },
    });

    return NextResponse.json(page);
  } catch (error) {
    console.log('ERROR: ', error);
  }
}
