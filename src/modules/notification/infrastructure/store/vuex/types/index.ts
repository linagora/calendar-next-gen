import EventNotification from '../../../../domain/entity/EventNotification';
import {
  Store as VuexStore,
  CommitOptions
} from 'vuex';

export enum MutationTypes {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  SET_LOADING = 'SET_LOADING'
}

export type State = {
  eventNotificationList: EventNotification[],
  isLoading: boolean
};

export type Mutations<S = State> = {
  [MutationTypes.SET_NOTIFICATIONS](state: S, payload: EventNotification[]): void;
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void;
};

export type Getters = {
  notificationList(state: State): EventNotification[],
  loading(state: State): boolean
};

export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
};
