import Image from 'App/Models/Image';
import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product';

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public image_id: number

  @column()
  public title: string

  @column()
  public description: string

  @belongsTo(() => Image, {
    foreignKey: 'image_id'
  })
  public images: BelongsTo<typeof Image>

  @manyToMany(() => Product)
  public products: ManyToMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
