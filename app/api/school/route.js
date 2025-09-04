import prisma from "../../lib/prisma";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const file = formData.get("image"); // This is a File object

    let fileName = null;
    if (file) {
      const bytes = Buffer.from(await file.arrayBuffer());
      fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(
        process.cwd(),
        "public/schoolImages",
        fileName
      );
      fs.writeFileSync(filePath, bytes);
    }
    const school = await prisma.school.create({
      data: { name, address, city, state, contact, email_id, image: fileName },
    });
    return NextResponse.json(school, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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
