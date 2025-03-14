import 'dotenv/config';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { drizzle } from 'drizzle-orm/mysql2';
import { desc } from 'drizzle-orm';
import * as schema from "../../../drizzle/schema";

let db = drizzle(process.env.DATABASE_URL!);

export const GET: RequestHandler = async ({ url }) => {
    const numOfRows = Number(url.searchParams.get('rows') ?? 0);

    if (isNaN(numOfRows)) error(400, 'Invalid number of rows');

    const rows = await db.select().from(schema.cansat).orderBy(desc(schema.cansat.id)).limit(numOfRows);

    return new Response(JSON.stringify(rows));
}

export const fallback: RequestHandler = () => error(404, 'Not found');