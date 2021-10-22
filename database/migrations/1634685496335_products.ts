import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 200)
      table.integer('image_id').unsigned()
      table.text('description')
      table.decimal('price', 12, 2)

      table.foreign('image_id').references('id').inTable('images').onDelete('cascade')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
    this.schema.createTable('image_product', table => {
      table.increments('id')
      table.integer('image_id').unsigned()
      table.integer('product_id').unsigned()
      table.foreign('image_id').references('id').inTable('images').onDelete('cascade')
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
    })
    this.schema.createTable('category_product', table => {
      table.increments('id')
      table.integer('product_id').unsigned()
      table.integer('category_id').unsigned()
      table.foreign('product_id').references('id').inTable('products').onDelete('cascade')
      table.foreign('category_id').references('id').inTable('categories').onDelete('cascade')
    })
  }

  public async down() {
    this.schema.dropTable('category_product')
    this.schema.dropTable('image_product')
    this.schema.dropTable(this.tableName)

  }
}
