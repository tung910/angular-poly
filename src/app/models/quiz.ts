export default interface IQuiz {
  id: number;
  quiz: string;
  subjectId: number;
  answers: { id: number; text: string; status: boolean }[];
}
