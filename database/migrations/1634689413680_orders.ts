import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.decimal('total', 12, 2).defaultTo(0.0)
      table.integer('user_id').unsigned()
      table.enu('status', [
        'pending',
        'cancelled',
        'shipped',
        'paid',
        'finished'
      ])

      table.foreign('user_id').references('id').inTable('users').onDelete('cascade')

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
