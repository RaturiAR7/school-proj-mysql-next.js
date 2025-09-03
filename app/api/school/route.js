import prisma from "../../lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, address, city, state, contact, email_id, image } = body;

    const school = await prisma.school.create({
      data: { name, address, city, state, contact, email_id, image },
    });

    return Response.json(school, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const schools = await prisma.school.findMany();
    return Response.json(schools, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
