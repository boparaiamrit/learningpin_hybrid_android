import {Question} from "./question";

export interface Assessment {
    assessment_id: number;
    assessment_name: string;
    training_id: number;
    training_name: string;
    time: string;
    time_in_sec: number;
    no_of_questions: number;
    max_marks: number;
    questions: Array<Question>;
}