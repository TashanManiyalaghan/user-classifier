import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuestionOption {
  id: number;
  option: string;
  votes: number;
}

interface QuestionData {
  url: string;
  question: string;
  options: QuestionOption[];
}

interface FormState {
  url: string;
  error: string;
  questionData: string;
  allData: QuestionData[];
}

const initialState: FormState = {
  url: '',
  error: '',
  questionData: '',
  allData: [] as QuestionData[],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setQuestionData: (state, action: PayloadAction<string>) => {
      state.questionData = action.payload;
    },
    addAllData: (state, action: PayloadAction<QuestionData>) => {
      state.allData.push(action.payload);
    },
    removeAllData: (state, action: PayloadAction<string>) => {
      state.allData = state.allData.filter((item: any) => item.url !== action.payload);
    }
  },
});

export const { setUrl, setError, setQuestionData, addAllData, removeAllData } = formSlice.actions;
export default formSlice.reducer;