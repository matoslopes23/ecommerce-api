import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserImageFks extends BaseSchema {

  public async up() {
    this.schema.alterTable('users', (table) => {
      table.foreign('image_id').references('id').inTable('images').onDelete('cascade')
    })
  }

  public async down() {
    this.schema.table('users', (table) => {
      table.dropForeign('image_id')
    })
  }
}
