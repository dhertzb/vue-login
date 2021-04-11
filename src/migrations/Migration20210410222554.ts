import { Migration } from '@mikro-orm/migrations';

export class Migration20210410222554 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" jsonb not null, "update_at" jsonb not null, "title" varchar(255) not null);');
  }

}
