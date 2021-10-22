import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CouponUsers extends BaseSchema {
  protected tableName = 'coupon_users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('coupon_id').unsigned()
      table.integer('user_id').unsigned()

      table.foreign('coupon_id').references('id').inTable('coupons').onDelete('cascade')
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
