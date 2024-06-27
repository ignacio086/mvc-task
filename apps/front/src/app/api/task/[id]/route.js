import { NextResponse } from "next/server";
export async function GET(req, { params }) {
  const res = await fetch(`http://localhost:3005/task/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}
export async function DELETE(req, { params }) {
  const res = await fetch(`http://localhost:3005/task/${params.id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}
export async function PUT(req, { params }) {
  const body = await req.json();
  const res = await fetch(`http://localhost:3005/task/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}
