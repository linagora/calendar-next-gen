import EventNotification from '../../../../domain/entity/EventNotification';
import {
  Store as VuexStore,
  CommitOptions
} from 'vuex';

export enum MutationTypes {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR'
}

export type State = {
  eventNotificationList: EventNotification[],
  isLoading: boolean,
  error: Record<string, unknown> | null,
};

export type Mutations<S = State> = {
  [MutationTypes.SET_NOTIFICATIONS](state: S, payload: EventNotification[]): void;
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void;
  [MutationTypes.SET_ERROR](state: S, payload: Record<string, unknown> | null): void;
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
