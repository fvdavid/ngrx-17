export interface Course {
    id: number;
    userId: number;
    link: string;
    body: string;
    title: string;
    // description: string;
    // longDescription?: string;
    // category: string;
    comment_count: number;
    promo: boolean;
}


export function compareCourses(c1: Course, c2: Course) {

    const compare = c1.userId - c2.userId;

    if (compare > 0) {
        return 1;
    }
    else if (compare < 0) {
        return -1;
    }
    else return 0;

}