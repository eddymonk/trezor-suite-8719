import React from 'react';
import produce from 'immer';

// import { LOCATION_CHANGE } from '@suite-actions/routerActions';
import { NOTIFICATION } from '@suite-actions/constants';

import { Action as SuiteAction } from '@suite-types';

// type NotificationTag = ObjectValues<typeof NOTIFICATION.TAG>;

export interface CallbackAction {
    label: React.ReactNode;
    callback: () => any;
}
// export interface NotificationEntry {
//     key: string; // autogenerated, used to close notification on click
//     id?: string; // programmer provided, might be used to find and close notification programmatically
//     devicePath?: string; // used to close notifications for device
//     variant: 'success' | 'info' | 'error';
//     title: React.ReactNode | string;
//     message?: React.ReactNode;
//     cancelable?: boolean;
//     actions?: CallbackAction[];
//     // tags?: NotificationTag[];
// }

export type NotificationPayload =
    | {
          type: 'acquire-error' | 'auth-failed' | 'auth-confirm-error';
          error?: string;
      }
    | {
          type:
              | 'settings-applied'
              | 'pin-changed'
              | 'device-wiped'
              | 'backup-success'
              | 'verify-message-success';
      }
    | {
          type: 'backup-error' | 'backup-failed';
      }
    | {
          type: 'tx-confirmed';
          txid: string;
      }
    | {
          type: 'discovery-error';
          error: string;
      }
    | {
          type: 'sign-tx-success';
          txid?: string;
      }
    | {
          type:
              | 'error'
              | 'verify-address-error'
              | 'sign-message-error'
              | 'verify-message-error'
              | 'sign-tx-error';
          error: string;
      };

export type NotificationEntry = {
    id: number; // programmer provided, might be used to find and close notification programmatically
    device: any; // used to close notifications for device
    hidden?: boolean;
} & NotificationPayload;

export type State = NotificationEntry[];

// const closeNotification = (state: State, payload?: NotificationClosePayload): State => {
//     // cancel by id (programmatic use case)
//     if (payload && typeof payload.id === 'string') {
//         return state.filter(entry => entry.id !== payload.id);
//     }
//     // cancel by key (handles user click);
//     if (payload && typeof payload.key === 'string') {
//         return state.filter(entry => entry.key !== payload.key);
//     }
//     if (payload && typeof payload.devicePath === 'string') {
//         return state.filter(entry => entry.devicePath !== payload.devicePath);
//     }
//     // should never get here because of typescript
//     return state;
// };

export default function notification(state: State = [], action: SuiteAction): State {
    return produce(state, draft => {
        switch (action.type) {
            // case DEVICE.DISCONNECT: {
            //     const { path } = action.payload;
            //     return (draft = state.filter(entry => entry.devicePath !== path));
            // }
            case NOTIFICATION.ADD:
                draft.push(action.payload);
                break;
            case NOTIFICATION.CLOSE: {
                const item = draft.find(n => n.id === action.payload);
                if (item) {
                    item.hidden = true;
                }
                break;
            }
            // TODO
            // case LOCATION_CHANGE:
            // no default
        }
    });
}
