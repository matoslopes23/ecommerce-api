import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderItems extends BaseSchema {
  protected tableName = 'order_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned()
      table.integer('quantity').unsigned()
      table.decimal('subtotal', 12, 2)
      table.integer('order_id').unsigned()

      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
      table.foreign('order_id').references('id').inTable('orders').onDelete('cascade')
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
