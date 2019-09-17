/**
 * This is Driver interface to give data type for drivers object
 */

export interface INotifications {
	userName: string
	from_id: string
	to_id: string;
	primaryItemId: string;
	secondaryItemId: string;
	channel: string;
	toComponentName: string;
	fromComponentName: string;
	componentAction: string;
	data: string;
	dateNotified: string,
	dateReceived: string,
	isNew: string;
}