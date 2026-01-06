import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { address, title, seoKeywords, content } = await request.json();

  if (!title || typeof title !== "string" || title.trim().length === 0) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 })
  }

  const page = await prisma.routePage.create({
    data: {
        address: address,
        title: title,
        seoKeywords: seoKeywords,
        content: JSON.stringify(content),
        userId: session.user.id
    }
  });

  return NextResponse.json(page)
}

export async function GET(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const searchParams = request.nextUrl.searchParams
  const searchStr = searchParams.get('searchStr')
  const searchStatus = searchParams.get('status')
  
console.log("QueryString : ", searchStr)
  const page = await prisma.routePage.findMany({
    where: {
      OR: [
      {
        address: { contains: searchStr ?? ""},
      },
      { title: { contains: searchStr ?? ""} },
      ],
       
    },
     orderBy: {
        title: 'desc',
      },
  });

  return NextResponse.json(page)
}