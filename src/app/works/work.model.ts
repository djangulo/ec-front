export class WorkPicture {
    id: number;
    title: string;
    image: string;
    caption: string;
    work: string;
    is_cover: boolean;
}

export class Work {
    id: number;
    title: string;
    slug: string;
    description: string;
    category_id: number;
    category_slug: string;
    document: string;
    pictures: WorkPicture[];
    cover_picture: WorkPicture;
    team: string;
    status: string;
    program: string;
    created_date: string;
    published_date: string;
}