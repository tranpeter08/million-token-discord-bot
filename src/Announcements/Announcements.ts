import {Client} from 'discord.js';
import {RecurringShills} from './RecurringShills';
import {channelIds} from '../channel-IDs'

export class Announcements {  
  constructor(private client: Client) {
    this.createAnnouncements();
  }

  // shills
  createAnnouncements(): void {
    new RecurringShills(
      this.client, 
      channelIds.lounge,  
      5
    );
  }
}