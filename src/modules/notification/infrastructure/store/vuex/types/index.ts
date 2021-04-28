import EventNotification from '../../../domain/entity/EventNotification';
import {
  ActionContext,
  Store as VuexStore,
  CommitOptions,
  DispatchOptions
} from 'vuex';

export enum MutationTypes {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  SET_LOADING = 'SET_LOADING'
}

export enum ActionTypes {
  SET_NOTIFICATIONS = 'SET_NOTIFICATIONS',
  SET_LOADING_STATE = 'SET_LOADING_STATE'
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

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>;

export interface Actions {
  [ActionTypes.SET_NOTIFICATIONS](
    { commit }: AugmentedActionContext,
    payload: EventNotification[]
  ): void;

  [ActionTypes.SET_LOADING_STATE](
    { commit }: AugmentedActionContext,
    payload: boolean
  ): void;
}

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
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
};
