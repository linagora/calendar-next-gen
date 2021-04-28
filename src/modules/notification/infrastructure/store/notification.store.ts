import EventNotification from '../../domain/entity/EventNotification';
import { store } from './vuex/notification.store.vuex';
import { MutationTypes, State } from './vuex/types';
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
    store.commit(MutationTypes.SET_LOADING, isLoading);
  }

  setEventNotifications(eventNotifications: EventNotification[]) {
    store.commit(MutationTypes.SET_NOTIFICATIONS, eventNotifications);
  }
}

export default new EventNotificationStore();
