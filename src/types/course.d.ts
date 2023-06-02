export default interface Course {
    title: string;
    image: string;
    description: string;
    period: {
      start: string;
      end: string;
    }
    readMore?: () => void;
}