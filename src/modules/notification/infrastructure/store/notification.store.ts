import EventNotification from '../../domain/entity/EventNotification';
import { store } from './vuex/notification.store.vuex';
import { ActionTypes, State } from './types';
import { MutationPayload } from 'vuex';

export type ListenerPayload = {
  eventNotificationList: EventNotification[],
  loading: boolean
};

export type StoreListener = (payload: ListenerPayload) => void;

class EventNotificationStore {
  subscribeToEventNotifications(listener: StoreListener) {
    store.subscribe((_mutation: MutationPayload, state: State) => {
      listener({
        eventNotificationList : state.eventNotificationList,
        loading: state.isLoading,
      });
    });
  }

  setIsLoading(isLoading: boolean) {
    store.dispatch(ActionTypes.SET_LOADING_STATE, isLoading);
  }

  setEventNotifications(eventNotifications: EventNotification[]) {
    store.dispatch(ActionTypes.SET_NOTIFICATIONS, eventNotifications);
  }
}

export default new EventNotificationStore();
