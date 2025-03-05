interface Author {
    name: string;
    title: string;
    avatar: string;
    linkedin?: string;
}

interface Post {
    id: number;
    author: Author;
    content: string;
    timestamp: string;
    videoUrl?: string;
}