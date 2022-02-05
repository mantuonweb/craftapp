import { AdminState } from '../../../../store/reducers/admin.reducers';

export interface DashboardState extends AdminState {
	tiles?: any;
	salesExpenses?: any;
	customers?: any
	loading?: boolean;
	error?: any
}