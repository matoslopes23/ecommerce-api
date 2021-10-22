import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Coupons extends BaseSchema {
  protected tableName = 'coupons'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('code', 100).notNullable()
      table.dateTime('valid_from')
      table.dateTime('valid_until')
      table.integer('quantity').defaultTo(1)
      table.enu('can_use_for', ['product', 'client', 'product_client', 'all'])

      table.enu('type', ['free', 'percent', 'category']).defaultTo('currency')
      table.boolean('recursive').defaultTo(false)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
