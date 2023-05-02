import { Movie } from "@prisma/client";

export class MovieEntity implements Movie {
    id: string;
    title: string;
    description: string;
    release_date: Date;
    runtime: string;
    director: string;
}
