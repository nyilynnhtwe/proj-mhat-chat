import { Cast } from "@prisma/client";

export class CastEntity implements Cast {
    id: string;
    name: string;
}
