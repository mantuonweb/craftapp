
import { AdminState } from '../../../store/reducers/admin.reducers';
export interface CustomersState extends AdminState {
  list?: any;
  selected?: number;
  loading?: boolean;
  error?: any;
  filters?: any;
}


// https://stackoverflow.com/questions/42233292/sublimetext-typescript-format-on-save/42237769