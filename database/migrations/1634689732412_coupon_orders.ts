import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CouponOrders extends BaseSchema {
  protected tableName = 'coupon_orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('coupon_id').unsigned()
      table.integer('order_id').unsigned()
      table.decimal('discount', 12, 2).defaultTo(0.0)

      table.foreign('coupon_id').references('id').inTable('coupons').onDelete('cascade')
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
