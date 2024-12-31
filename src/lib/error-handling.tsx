// lib/error-handling.ts
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { MongoError } from 'mongodb';

interface ErrorResponse {
  error: string;
  details?: unknown;
  status: number;
}

export function handleApiError(error: unknown): NextResponse<ErrorResponse> {
  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        error: 'Validation failed',
        details: error.errors,
        status: 400
      },
      { status: 400 }
    );
  }

  if (error instanceof MongoError) {
    if (error.code === 11000) {
      return NextResponse.json(
        {
          error: 'Duplicate entry',
          status: 409
        },
        { status: 409 }
      );
    }
  }

  if (error instanceof Error) {
    console.error('API Error:', error.message);
    return NextResponse.json(
      {
        error: error.message,
        status: 500
      },
      { status: 500 }
    );
  }

  console.error('Unknown Error:', error);
  return NextResponse.json(
    {
      error: 'An unexpected error occurred',
      status: 500
    },
    { status: 500 }
  );
}