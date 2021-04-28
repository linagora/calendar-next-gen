import EventNotification from '../../../domain/entity/EventNotification';
import { createStore, GetterTree, MutationTree } from 'vuex';
import { Getters, Mutations, MutationTypes, State as NotificationState, Store } from './types';

const state = (): NotificationState => ({
  eventNotificationList: [],
  isLoading: false,
  error: null,
});

const getters: GetterTree<NotificationState, NotificationState> & Getters = {
  notificationList: state => state.eventNotificationList,
  loading: state => state.isLoading,
};

const mutations: MutationTree<NotificationState> & Mutations = {
  [MutationTypes.SET_NOTIFICATIONS](state: NotificationState, payload: EventNotification[]) {
    state.eventNotificationList = payload;
  },

  [MutationTypes.SET_LOADING](state: NotificationState, payload: boolean) {
    state.isLoading = payload;
  },

  [MutationTypes.SET_ERROR](state: NotificationState, payload: Record<string, unknown> | null) {
    state.error = payload;
  },
};

export const store = createStore({
  state,
  getters,
  mutations,
});

export function useStore() {
  return store as Store;
}
