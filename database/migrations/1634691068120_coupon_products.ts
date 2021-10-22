import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CouponProducts extends BaseSchema {
  protected tableName = 'coupon_products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('coupon_id').unsigned()
      table.integer('product_id').unsigned()

      table.foreign('coupon_id').references('id').inTable('coupons').onDelete('cascade')
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
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
