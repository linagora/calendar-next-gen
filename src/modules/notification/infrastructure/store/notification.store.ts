import EventNotification from '../../domain/entity/EventNotification'
import valtioEventNotificationStore, { EventNotificationState, subscribe } from './valtio/notification.store.valtio'

export type StoreListener = (state: EventNotificationState) => void;

class EventNotificationStore {
  subscribeToEventNotifications(listener: StoreListener) {
    subscribe(valtioEventNotificationStore, () => {
      console.log(valtioEventNotificationStore)
      listener(valtioEventNotificationStore)
    })
  }

  setIsLoading(isLoading: boolean) {
    valtioEventNotificationStore.isLoading = isLoading
  }

  setEventNotifications(eventNotifications: EventNotification[]) {
    valtioEventNotificationStore.eventNotifications = eventNotifications
  }
}

export default new EventNotificationStore()
