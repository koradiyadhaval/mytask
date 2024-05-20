import {InterfaceHome} from '../../../Interface/Response/Home/InterfaceHome';

export interface HomescreenState {
  Loader: boolean;
  Data: InterfaceHome[];
  isLoadingMore: boolean;
  isNextDataFound: boolean;
  pagenumber: number;
}
