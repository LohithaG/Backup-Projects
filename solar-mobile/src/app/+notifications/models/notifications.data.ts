import { INotifications } from './notifications';

/**
 *This is model driver class to store driver data
 */

export class Notifications implements INotifications {
	constructor(
		public userName: string,
		public from_id: string,
		public to_id: string,
		public primaryItemId: string,
		public secondaryItemId: string,
		public channel: string,
		public toComponentName: string,
		public fromComponentName: string,
		public componentAction: string,
		public data: string,
		public dateNotified: string,
		public dateReceived: string,
		public isNew: string,
	) {

	}

}
