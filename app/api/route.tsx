import { NextResponse } from "next/server";
import React from "react";

export const GET = () => {
  return NextResponse.json({
    message: "hello from API route",
    status: "success",
  });
};
