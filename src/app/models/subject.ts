import IQuiz from './quiz';

export default interface Isubject {
  id: number;
  name: string;
  icon: string;
  slug: string;
  member?: number;
  totalQuestion?: number;
  questions?: IQuiz[];
}
