import { createContext } from 'react';
import { data } from '../questions';

export const AppContext = createContext(data.questions);
