import EventNotification from '../../../domain/entity/EventNotification';
import { ActionTree, createStore, GetterTree, MutationTree } from 'vuex';
import { Actions, ActionTypes, Getters, Mutations, MutationTypes, State as NotificationState, Store } from '../types';

const state = (): NotificationState => ({
  eventNotificationList: [],
  isLoading: false,
});

const getters: GetterTree<NotificationState, NotificationState> & Getters = {
  notificationList: state => state.eventNotificationList,
  loading: state => state.isLoading,
};

const actions: ActionTree<NotificationState, NotificationState> & Actions = {
  [ActionTypes.SET_NOTIFICATIONS]({ commit }, payload) {
    commit(MutationTypes.SET_NOTIFICATIONS, payload);
  },

  [ActionTypes.SET_LOADING_STATE]({ commit }, payload) {
    commit(MutationTypes.SET_LOADING, payload);
  },
};

const mutations: MutationTree<NotificationState> & Mutations = {
  [MutationTypes.SET_NOTIFICATIONS](state: NotificationState, payload: EventNotification[]) {
    state.eventNotificationList = payload;
  },

  [MutationTypes.SET_LOADING](state: NotificationState, payload: boolean) {
    state.isLoading = payload;
  },
};

export const store = createStore({
  state,
  getters,
  actions,
  mutations,
});

export function useStore() {
  return store as Store;
}
