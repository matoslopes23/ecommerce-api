import Category from 'App/Models/Category';
import Image from 'App/Models/Image';
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'


export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public image_id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Image, {
    foreignKey: 'image_id'
  })
  public image: BelongsTo<typeof Image>

  @manyToMany(() => Image, {
    pivotTable: 'image_product'
  })
  public images: ManyToMany<typeof Image>

  @manyToMany(() => Category, {
    pivotTable: 'category_product'
  })
  public categories: ManyToMany<typeof Category>
}
