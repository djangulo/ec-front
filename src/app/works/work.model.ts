export class WorkPicture {
    id: number;
    title: string;
    image: string;
    caption: string;
    work: string;
}

export class WorkShort {
    id: number;
    title: string;
    category: string;
    cover: {image: string};
    team: string;
    status: string;
    program: string;
    published_date: string;
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
    cover: WorkPicture;
    team: string;
    status: string;
    program: string;
    created_date: string;
    published_date: string;
}


export class Pics{
    pictures: WorkPicture[];
    stage: {
      stageCenter: WorkPicture,
      stageLeft: WorkPicture,
      stageRight: WorkPicture
    };
    len: {
      i: number,
      c: number,
      l: number,
      r: number
    }
};
